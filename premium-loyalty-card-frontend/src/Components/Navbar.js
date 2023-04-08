import React from "react";
import "../Styles/Navbar.css";
import profile from '../images/LoginImage.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__profile">
        <img src={profile} alt="Profile" className="navbar__profileImg" />
        <span className="navbar__profileName">John Doe</span>
      </div>
    </nav>
  );
}

export default Navbar;
