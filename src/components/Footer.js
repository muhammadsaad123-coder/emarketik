import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/logo.webp";
import meta2 from "../assets/images/metafooter.png";
import google2 from "../assets/images/googlefooter.png";
import linked2 from "../assets/images/linkedfooter.png";
import bing2 from "../assets/images/bingfooter.png";
import appStore from "../assets/images/appstore.png"; // Add paths to your app store images
import googlePlay from "../assets/images/playstore.png";


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
            <li><a href="/contact">Website</a></li>
            <li><a href="/contact">Ecommerce</a></li>
            <li><a href="/contact">Payments</a></li>
            <li><a href="/contact">Point of Sale</a></li>
            <li><a href="/contact">CRM</a></li>
            <li><a href="/contact">Forms</a></li>
          </ul>
        </div>
        <div className="footer2-column">
          {/* <h3>Services by Industry</h3> */}
          <ul>
            <li><a href="/email-marketing">Email Marketing</a></li>
            <li><a href="/contact">Listings</a></li>
            <li><a href="/contact">Reputation</a></li>
            <li><a href="/smm">Social</a></li>
            <li><a href="/contact">Content</a></li>
            <li><a href="/contact">Ads</a></li>
            <li><a href="/contact">Intelligence</a></li>
          </ul>
        </div>

        <div className="footer2-column">
          <h3>Services by Industry</h3>
          <ul>
            <li><a href="/contact">E-Commerce</a></li>
            <li><a href="/contact">Contractor</a></li>
            <li><a href="/contact">Fitness</a></li>
            <li><a href="/contact">Medical</a></li>
            <li><a href="/contact">Real Estate</a></li>
            <li><a href="/contact">Attorney</a></li>
            <li><a href="/contact">More Industries...</a></li>
          </ul>
        </div>
        <div className="footer2-column">
          <h3>More</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/creative-services">Creative Services</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/our-clients">Our Clients</a></li>
            <li><a href="/contact">Partner With Us</a></li>
            <li><a href="/contact">Blog</a></li>
          </ul>
        </div>
        <div className="footer2-column">
          <h3>Support</h3>
          <ul>
            <li><a href="/contact">Online Help Center</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          <div className="contact-section">
        <h3>UK Contact</h3>
        <p>
          <a href="tel:02039166139" className="contact-link">
            020 3916 6139
          </a>
        </p>

        <h3>Outside UK Contact</h3>
        <p>
          <a href="tel:+442039166139" className="contact-link">
            +44 2039166139
          </a>
        </p>
      </div>
          
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
