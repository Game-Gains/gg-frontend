// NavBar.tsx
import React, { useState } from 'react';
import settingsButton from '../../images/settingsbutton.svg'
import CreateUserModal from '../UserLogins/CreateUserModalOLD';
import './NavBar.css'

const NavBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [sideMenuActive, setSideMenuActive] = useState(false);

  const handleSideMenuToggle = () => {
    setSideMenuActive(!sideMenuActive);
  };


  return (
    <header className="header">
         {/* Logo  */}
        <img className="logo gglogostretchedgg" src="/images/gglogostretchedgg-2@2x.png" alt="GameGains Logo" />
        
         {/* Search Bar  */}
        <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search"/>
            <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
        </div>
        
         {/* Hamburger Menu Button  */}
        <div className="menu-btn" onClick={handleSideMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
         {/* Navigation Tabs  */}
        <div className={`nav-tabs ${sideMenuActive ? '' : ' hidden'}`} >
             {/* First group  */}
            <div className="tab-group">
                <div className="tab">
                    TEMP
                </div>
            </div>

             {/* Second group  */}
            <div className="tab-group">
                <div className="tab">
                    TEMP
                </div>
            </div>

             {/* Third group  */}
            <div className="tab-group">
              <div className="tab">
                TEMP
              </div>
            </div>
        </div>

         {/* Right Side Controls  */}
        <div className="right-controls">
            <div className="login-btn">Login</div>
            <button className="create-account-btn">Create Account</button>
            
             {/* Settings Button  TODO*/}
            <div className="utility-btn settings-btn">
                <svg viewBox="0 0 24 24">
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5-0.38,1.03-0.7,1.62-0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
            </div>

            
             {/* Language Selector  TODO */}
            <div className="utility-btn language-selector">
                <svg viewBox="0 0 24 24">
                    <path d="M12.87,15.07l-2.54-2.51l0.03-0.03C11.29,11.46,12,10.02,12,8.5C12,5.91,9.09,3,6.5,3S1,5.91,1,8.5S3.91,14,6.5,14 c1.52,0,2.96-0.71,4.03-1.64l0.03,0.03l2.51,2.54L12.87,15.07z M6.5,12C5.01,12,3,9.99,3,8.5S5.01,5,6.5,5S10,7.01,10,8.5 S7.99,12,6.5,12z"/>
                </svg>
                <div className="language-dropdown">
                    <div className="language-option">English</div>
                    <div className="language-option">Spanish</div>
                    <div className="language-option">Chinese</div>
                    <div className="language-option">Hindi</div>
                    <div className="language-option">Arabic</div>
                    <div className="language-option">Portuguese</div>
                    <div className="language-option">Russian</div>
                    <div className="language-option">Japanese</div>
                    <div className="language-option">German</div>
                    <div className="language-option">French</div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default NavBar;