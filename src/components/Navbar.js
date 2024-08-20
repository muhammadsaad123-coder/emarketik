import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.webp';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Emarketick Logo" />
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} className="close-icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="open-icon" />
        )}
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about-us" className={isActive('/about-us')} onClick={closeMenu}>About Us</Link></li>
        <li className="dropdown" ref={dropdownRef}>
          <div className="dropdown-link" onClick={toggleDropdown}>
            <Link to="/creative-services" className={isActive('/creative-services')} onClick={closeMenu}>
              Creative Services
            </Link>
            <FontAwesomeIcon icon={faChevronDown} className={`arrow-icon ${dropdownOpen ? 'dropdown-open' : ''}`} />
          </div>
          <div className={`dropdown-content ${dropdownOpen ? 'open' : ''}`}>
            <Link to="/smm" className={isActive('/smm')} onClick={closeMenu}>SMM</Link>
            <Link to="/marketing-team" className={isActive('/marketing-team')} onClick={closeMenu}>Marketing Team</Link>
            <Link to="/email-marketing" className={isActive('/email-marketing')} onClick={closeMenu}>Email Marketing</Link>
            <Link to="/analytics-clarity" className={isActive('/analytics-clarity')} onClick={closeMenu}>Emarketick Analytics & Clarity</Link>
            <Link to="/crm-system" className={isActive('/crm-system')} onClick={closeMenu}>Emarketick CRM System</Link>
          </div>
        </li>
        <li><Link to="/our-clients" className={isActive('/our-clients')} onClick={closeMenu}>Our Clients</Link></li>
        <li><Link to="/success-stories" className={isActive('/success-stories')} onClick={closeMenu}>Success Stories</Link></li>
        <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link></li>
      </ul>
      <div className="navbar-actions">
        <a href="https://app.emarketick.com/?ng=client/login/" className="login-btn" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Login</a>
        <Link to="/consultation" className="consultation-btn" onClick={closeMenu}>Get Consultation</Link>
      </div>
    </nav>
  );
};

export default Navbar;
