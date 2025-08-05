import React from 'react';
import './Navbar.css'; // Assuming there is CSS file for styling
import logo from '../../assets/logo.svg'; // Logo image path

const NavBar = () => {
  return(
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu"> 
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default NavBar