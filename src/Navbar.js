import React from 'react';
import './Navbar.css';
import logo from './assets/images/logo.jpg'; 
import whatsappLogo from './assets/images/whatsapp.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Emarketick Logo" />
      </div>
      <ul className="navbar-menu">
        <li><a href="/" >Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li className="dropdown">
          <a href="/creative-services">
            Creative Services <span className="arrow-icon"></span>
          </a>
          <div className="dropdown-content">
            <a href="/smm">SMM</a>
            <a href="/marketing-team">Marketing Team</a>
            <a href="/email-marketing">Email-Marketing</a>
            <a href="/analytics-clarity">Emarketick Analytics & Clarity</a>
            <a href="/crm-system">Emarketick CRM System</a>
          </div>
        </li>
        <li><a href="/our-clients">Our Clients</a></li>
        <li><a href="/success-stories">Success Stories</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="/whatsapp" className="whatsapp-icon">
          <img src={whatsappLogo} alt="WhatsApp Logo" />
        </a>
        <a href="/login" className="login-btn">Login</a>
        <a href="/consultation" className="consultation-btn">Get Consultation</a>
      </div>
    </nav>
  );
};

export default Navbar;
