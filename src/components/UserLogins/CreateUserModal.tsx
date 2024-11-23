import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface CreateUserModalProps {
  modalToggle: () => void;
  createOpen: boolean;
}

const CreateUserModal: React.FC<CreateUserModalProps> = (
  props: CreateUserModalProps
) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const {setAuth} = useAuth()

  // Send Login Info to Backend
  const handleSubmit = async () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('email', email);
    console.log('backend url ', backendUrl);

    try {
      const response = await fetch(`http://localhost:3000/users/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          password: password,
          email: email,
        }),
      });

      console.log('response', response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parse the response data
      console.log('User created:', data); // Handle the response data (e.g., success message)
      setAuth(data.userId, email, data.accessToken, username);
      props.modalToggle(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error creating user:', error);
    }
    props.modalToggle(); // Close the modal after submission
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // TODO: THIS THING
  const handleRepeatPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(event.target.value);
  };

  if (props.createOpen) {
    return (
      <div className="modal-overlay" id="createAccountModal">
        <div className="modal-container">
          <div className="modal-close" id="modalClose" onClick={props.modalToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="form-header">
            <img
              className="gglogostretchedgg"
              src="/images/gglogostretchedgg-2@2x.png"
              alt="GameGains Logo"
            />
          </div>
          <form id="createAccountForm">
            <div className="form-group">
              <label htmlFor="email">Username</label>
              <input id="email" name="username" required onChange={handleUsernameChange}/>
              <div className="error-message" id="emailError"></div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required onChange={handleEmailChange}/>
              <div className="error-message" id="emailError"></div>
            </div>
            {/* TODO: Handle repeat passwords and the guidelines */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required onChange={handlePasswordChange}/>
              <div className="error-message" id="passwordError"></div>
              <div className="password-requirements">
                Password must be at least 8 characters long and include a number
                and special character (NOT HANDLED RN)
              </div>
            </div>
            {/* <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
              <div className="error-message" id="confirmPasswordError"></div>
            </div> */}
          </form>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Create Account
            </button>
          {/* TODO: FIX THIS */}
          <div className="login-link">
            Already have an account?
            <a href="#" id="switchToLogin">
              Login (NOT HANDLED RN)
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CreateUserModal;
