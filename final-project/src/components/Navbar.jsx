import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="contact-num">
          <a href="" id="contact-num">
            USA: (469) 781-8845
          </a>
        </div>
      </div>
      <div className="main-content">
        <div className="logo">
          <img src={logo} alt="Pixarsart Logo" />
        </div>
        <div className="menu-items">
          <ul className="menu-list">
            <li>SERVICES</li>
            <li>ENTERPRISE</li>
            <li>ABOUT US</li>
            <li>OUR WORK</li>
            <li>RESOURCES</li>
            <li>CAREERS</li>
            <li>CONTACT US</li>
          </ul>
          <div className="menu-button">
            <img src={menu} alt="Menu Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
