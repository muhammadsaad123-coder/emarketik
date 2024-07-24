import React from "react";
import "./Footer.css";
import logo from "./assets/images/logo.jpg";
import meta2 from "./assets/images/metafooter.png";
import google2 from "./assets/images/googlefooter.png";
import linked2 from "./assets/images/linkedfooter.png";
import bing2 from "./assets/images/bingfooter.png";
import appStore from "./assets/images/appstore.png"; // Add paths to your app store images
import googlePlay from "./assets/images/playstore.png";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram, faPinterestP, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer2">
      <div className="footer2-content">
        <div className="footer2-column">
          <div className="navbar-logo">
            <img src={logo} alt="Emarketick Logo" />
          </div>
          <div className="footer2-logos">
            <img src={meta2} alt="Meta" />
            <img src={google2} alt="Google Ads" />
          </div>
          <div className="footer2-logos">
            <img src={linked2} alt="LinkedIn Ads" />
            <img src={bing2} alt="Bing Ads" />
          </div>
        </div>
        <div className="footer2-column">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/marketing-team">Marketing Team</a></li>
            <li><a href="/website">Website</a></li>
            <li><a href="/ecommerce">Ecommerce</a></li>
            <li><a href="/payments">Payments</a></li>
            <li><a href="/point-of-sale">Point of Sale</a></li>
            <li><a href="/crm">CRM</a></li>
            <li><a href="/forms">Forms</a></li>
          </ul>
        </div>
        <div className="footer2-column">
          <h3>Services by Industry</h3>
          <ul>
            <li><a href="/email-marketing">Email Marketing</a></li>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/reputation">Reputation</a></li>
            <li><a href="/social">Social</a></li>
            <li><a href="/content">Content</a></li>
            <li><a href="/ads">Ads</a></li>
            <li><a href="/intelligence">Intelligence</a></li>
          </ul>
        </div>
        <div className="footer2-column">
          <h3>More</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/creative-services">Creative Services</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/our-clients">Our Clients</a></li>
            <li><a href="/partner-with-us">Partner With Us</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer2-column">
          <h3>Support</h3>
          <ul>
            <li><a href="/help-center">Online Help Center</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
          <h3>UK Contact</h3>
          <p>+44 (0) 747 606 7595</p>
          <h3>Pakistan Contact</h3>
          <p>+92 (0) 312 0444414</p>
        </div>
      </div>
      <div className="footer2-bottom">
        <div className="footer2-bottom-left">
          <div className="social-icons">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.pinterest.com"><FontAwesomeIcon icon={faPinterestP} /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <p>emarketick Limited is a Registered Organization Of United Kingdom</p>
        </div>
        <div className="footer2-bottom-right">
          <p>Create a emarketick© account and download our <a href="/mobile-app">mobile app</a></p>
          <div className="app-links">
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
