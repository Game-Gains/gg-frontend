import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const LoggedInUserInfo: React.FC = (
) => {

  const { userId, email, accessToken, logout } = useAuth();


  return(<div className="logged-in">
    <span>Welcome, {email}</span>
    {/* Using same style as login for simplicity */}
    <button className="create-account-btn" onClick={logout}>Logout</button> 
  </div>)
};

export default LoggedInUserInfo;
