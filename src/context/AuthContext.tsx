import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  userId: string | null;
  userName: string | null;
  email: string | null;
  accessToken: string | null;
  setAuth: (userId: string, email: string, accessToken: string, userName: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const setAuth = (userId: string, email: string, accessToken: string, userName: string) => {
    setUserId(userId);
    setEmail(email);
    setAccessToken(accessToken);
    setUserName(userName);

    // Keep user info in local storage
    localStorage.setItem('userId', userId);
    localStorage.setItem('email', email);
    localStorage.setItem('userName', userName);

    // TODO: make this more secure, use HHTP only maybe? this is fine for now tho
    localStorage.setItem('accessToken', accessToken);
  };

  const logout = () => {
    setUserId(null);
    setEmail(null);
    setAccessToken(null);
    setUserName(null)

    // Clear storage
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('userName');

    localStorage.removeItem('accessToken');
  };

  useEffect(() => {
    // Restore data from local storage on app load
    const storedUserId = localStorage.getItem('userId');
    const storedEmail = localStorage.getItem('email');

    const storedAccessToken = localStorage.getItem('accessToken'); // TODO BLAH BLAH FIX INSECURE ETC
    if (storedUserId && storedEmail) {
      setUserId(storedUserId);
      setEmail(storedEmail);
      setAccessToken(storedAccessToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId, userName, email, accessToken, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
