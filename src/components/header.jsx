
import React from "react"
import './header.css';

export const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <img src="https://gro.care/static/images/app_logo.svg" alt="Your Logo" />
      </div>
      
      <div className="profile-image-container">
        <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" alt="Profile" className="profile-image" />
      </div>      
    </header>
  );
};

export default Header;
