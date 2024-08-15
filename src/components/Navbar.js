import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.webp';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Emarketick Logo" />
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <div className="close-icon">X</div>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="/" className={isActive('/')}>Home</a></li>
        <li><a href="/about-us" className={isActive('/about-us')}>About Us</a></li>
        <li className="dropdown">
          <a href="/creative-services" className={isActive('/creative-services')}>
            Creative Services <span className="arrow-icon"></span>
          </a>
          <div className="dropdown-content">
            <a href="/smm" className={isActive('/smm')}>SMM</a>
            <a href="/marketing-team" className={isActive('/marketing-team')}>Marketing Team</a>
            <a href="/email-marketing" className={isActive('/email-marketing')}>Email-Marketing</a>
            <a href="/analytics-clarity" className={isActive('/analytics-clarity')}>Emarketick Analytics & Clarity</a>
            <a href="/crm-system" className={isActive('/crm-system')}>Emarketick CRM System</a>
          </div>
        </li>
        <li><a href="/our-clients" className={isActive('/our-clients')}>Our Clients</a></li>
        <li><a href="/success-stories" className={isActive('/success-stories')}>Success Stories</a></li>
        <li><a href="/contact" className={isActive('/contact')}>Contact</a></li>
      </ul>
      <div className="navbar-actions">
        
      <a href="https://app.emarketick.com/?ng=client/login/" className="login-btn" target="_blank" rel="noopener noreferrer">Login</a>


        <a href="/consultation" className="consultation-btn">Get Consultation</a>
      </div>
    </nav>
  );
};

export default Navbar;
