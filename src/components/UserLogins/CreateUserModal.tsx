import React, { useState } from 'react';

interface CreateUserModalProps {
  onClose: () => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  console.log('backend url ', backendUrl);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('email', email);
    console.log('backend url ', backendUrl);

    try {
      const response = await fetch(`http://localhost:3000/users/create`, {
        method: 'POST', // Specify the method
        headers: {
          'Content-Type': 'application/json', // Specify content type
        },
        body: JSON.stringify({ "username": username, password: "password", email: "email"}),
      });

      console.log('response', response)

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parse the response data
      console.log('User created:', data); // Handle the response data (e.g., success message)
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error creating user:', error);
    }
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay" id="createAccountModal">
        <div className="modal-container">
            <div className="modal-close" id="modalClose">
                <svg viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12z"/>
                </svg>
            </div>
            <div className="form-header">
                <img className="gglogostretchedgg" src="https://c.animaapp.com/EtqOPAmu/img/gglogostretchedgg-2@2x.png" alt="GameGains Logo" />
            </div>
            <form id="createAccountForm">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                    <div className="error-message" id="emailError"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                    <div className="error-message" id="passwordError"></div>
                    <div className="password-requirements">
                        Password must be at least 8 characters long and include a number and special character
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required/>
                    <div className="error-message" id="confirmPasswordError"></div>
                </div>
                <button type="submit" className="submit-btn">Create Account</button>
            </form>
            <div className="login-link">
                Already have an account?<a href="#" id="switchToLogin">Login</a>
            </div>
        </div>
    </div>
  );
};

export default CreateUserModal;