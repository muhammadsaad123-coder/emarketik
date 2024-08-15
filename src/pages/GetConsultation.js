import React from "react";
import "../styles/GetConsultation.css";
import  { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faComments, faHeadset } from '@fortawesome/free-solid-svg-icons';

import meta from "../assets/images/meta.png";
import googleAds from "../assets/images/googleAds.png";
import linkedinAds from "../assets/images/linkedinAds.png";
import bingAds from "../assets/images/bingAds.png";
import pinterestAds from "../assets/images/pinterestAds.png";
import social from "../assets/images/social.png";

import googlePartner from "../assets/images/consultation_img/Google-Premier.webp"; // Replace with the actual path
import metaPartner from "../assets/images/consultation_img/Meta.webp"; // Replace with the actual path
import microsoftPartner from "../assets/images/consultation_img/Elite.webp"; // Replace with the actual path



const GetConsultation = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        mobileNumber: '',
        phoneNumber: '',
        email: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          'YOUR_SERVICE_ID',       // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID',      // Replace with your EmailJS template ID
          formData,
          'YOUR_USER_ID'           // Replace with your EmailJS user ID
        ).then((result) => {
            console.log('Email sent successfully!', result.text);
            alert('Your request has been sent successfully!');
          }, (error) => {
            console.log('Failed to send email.', error.text);
            alert('There was an error sending your request.');
          });
    
        // Optionally, clear the form fields after submission
        setFormData({
          name: '',
          companyName: '',
          mobileNumber: '',
          phoneNumber: '',
          email: ''
        });
    }
  return (
    <>
      <div className="consultation-container">
        <div className="consultation-left">
          <h2>
            Digital marketing
            <br />
            <span className="highlight">solutions</span> for your
            <br />
            local business
          </h2>
          <p>
            Everything you need to grow your business, powered by top
            <br />
            technology and expert support
          </p>
          <div className="consultation-buttons">
            <a
              href="https://emarketick.com/contact/"
              className="button red-button"
            >
              Get a FREE consultation
            </a>
            <a
              href="https://emarketick.com/solutions-advisor/"
              className="button black-button"
            >
              Find your ideal solution
            </a>
          </div>
        </div>
        <div className="consultation-right">
          <div className="stat-box">
            <h3>529+</h3>
            <p>Companies using our Free Consultation services</p>
          </div>
          <div className="stat-box">
            <h3>25k+</h3>
            <p>emarketick has managed over Paid Campaigns</p>
          </div>
          <div className="stat-box">
            <h3>115+</h3>
            <p>
              Businesses have trusted us with their Websites and Social Media
              Services
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}

      <footer className="footer">
        <div className="footer-content">
          <p>
            We make sure your business can be found across these major online
            platforms
          </p>
          <div className="social-media-logos">
            <img src={meta} alt="Meta" />
            <img src={social} alt="Social" />
            <img src={googleAds} alt="Google Ads" />
            <img src={linkedinAds} alt="LinkedIn Ads" />
            <img src={bingAds} alt="Bing Ads" />
            <img src={pinterestAds} alt="Pinterest Ads" />
          </div>
        </div>
      </footer>
      <div className="solutions-container">
        <div className="solutions-header">
          <h3>OUR SOLUTIONS</h3>
          <h2>
            We’ll help you choose a solution and tailor it to
            <br />
            your budget & needs
          </h2>
          <a href="/contact" className="button red-button">
            Find your ideal solution
          </a>
        </div>
        <div className="solutions-options">
          <div className="solution">
            <div
              className="solution-icon"
              style={{ backgroundColor: "#FFDD00" }}
            ></div>
            <h4>Gold</h4>
            <p>“I want to be found online, best for small business”</p>
            <a href="/contact" className="consultation-link">
              Get Consultation
            </a>
          </div>
          <div className="solution">
            <div
              className="solution-icon"
              style={{ backgroundColor: "#C1C5FF" }}
            ></div>
            <h4>Titanium</h4>
            <p>
              “I want a strong online presence and a professional,
              conversion-focused social media plan”
            </p>
            <a href="/contact" className="consultation-link">
              Get Consultation
            </a>
          </div>
          <div className="solution">
            <div
              className="solution-icon"
              style={{ backgroundColor: "#E0E0E0" }}
            ></div>
            <h4>Platinum</h4>
            <p>
              “I want to reach ready-to-buy customers across multiple platforms
              and drive leads to my business”
            </p>
            <a href="/contact" className="consultation-link">
              Get Consultation
            </a>
          </div>
        </div>
      </div>

      <section className="gold-plan-section">
        <div className="gold-plan-content">
          <div className="gold-plan-left">
            <p>For Small Business, want to be found online</p>
            <h1>Gold</h1>
            <a href="/contact" className="red-button">
              Get Free Consultation
            </a>
          </div>
          <div className="gold-plan-right">
            <div className="features-box">
              <h3>Features in Gold</h3>
              <ul>
                <li>2 Platforms</li>
                <li>15 Posts Per Month</li>
                <li>Content Creation</li>
                <li>Posts & Story Included</li>
                <li>#Hashtags Included</li>
                <li>Media Buying Ads Management</li>
                <li>Custom Analytics & Reports</li>
                <li>Facebook & Instagram Included</li>
                <li>Content For Post</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gold-plan-footer">
          <span>SOLUTION STARTING AT $249 PER MONTH</span>
        </div>
      </section>

      <section className="titanium-plan-section">
        <div className="titanium-plan-content">
          <div className="titanium-plan-left">
            <p>
              For businesses who want a strong online presence and a
              professional, conversion-focused website
            </p>
            <h1>Titanium</h1>
            <a href="/contact" className="red-button">
              Get Free Consultation
            </a>
          </div>
          <div className="titanium-plan-right">
            <div className="features-box">
              <h3>Features in Titanium</h3>
              <ul>
                <li>3 Platforms</li>
                <li>30 Posts Per Month</li>
                <li>Content Creation</li>
                <li>Posts & Story Included</li>
                <li>#Hashtags Included</li>
                <li>Media Buying Ads Management</li>
                <li>Custom Analytics & Reports</li>
                <li>Facebook & Instagram Included</li>
                <li>Content For Post</li>
                <li>Dedicated Social Media Manager</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="titanium-plan-footer">
          <span>SOLUTION STARTING AT $449 PER MONTH</span>
        </div>
      </section>

      <section className="platinum-plan-section">
        <div className="platinum-plan-content">
          <div className="platinum-plan-left">
            <p>
              For businesses who want to reach ready-to-buy customers across
              multiple platforms and drive leads
            </p>
            <h1>Platinum</h1>
            <a href="/contact" className="red-button">
              Get Free Consultation
            </a>
            <div className="plan-price">
              <p>SOLUTION</p>
              <p>STARTING</p>
              <p>AT £150</p>
              <p>PER</p>
              <p>MONTH</p>
            </div>
          </div>
          <div className="platinum-plan-right">
            <div className="features-box">
              <h3>Features in Platinum</h3>
              <ul>
                <li>5 Platforms</li>
                <li>60 Posts Per Month</li>
                <li>Content Creation</li>
                <li>Posts & Story Included</li>
                <li>#Hashtags Included</li>
                <li>Media Buying Ads Management</li>
                <li>Custom Analytics & Reports</li>
                <li>Facebook & Instagram Included</li>
                <li>Content For Post</li>
                <li>
                  <strong>Level up with these add-ons:</strong>
                </li>
                <li>Brand Awareness Campaigns Included</li>
                <li>$500 Dollar Ads Credit Included</li>
                <li>Dedicated Social Media Advisor</li>
                <li>5 Videos Animated Included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="intro-text">
          <p>
            As a Service Provider of Meta and Google, Microsoft as well as one
            of the UK’s top Google Service Providers, we know how to level up
            your marketing and help your business succeed.
          </p>
          <p className="italic-text">
            *We’re number 1 among direct competitors (those that target local
            businesses regardless of the customer’s industry)
          </p>
        </div>
        <div className="partners">
          <img src={googlePartner} alt="Google Partner" />
          <img src={metaPartner} alt="Meta Partner" />
          <img src={microsoftPartner} alt="Microsoft Elite Partner" />
        </div>
        <div className="how-it-works-content">
          <h2>How it works</h2>
          <p>Your new solution is just a message or call away!</p>
          <div className="steps">
            <div className="step">
              <h3>1</h3>
              <h4>Get in touch</h4>
              <p>Speak to us for a free digital marketing consultation</p>
             
            </div>
            <div className="step">
            <div className="contact-options">
                <p>Fill out a form</p>
                <p>Chat now</p>
                <p>Call us</p>
              </div>

            </div>
            <div className="step">
              <h3>2</h3>
              <h4>Consultation</h4>
              <p>Speak to us for a free digital marketing consultation</p>
            </div>
            <div className="step">
              <h3>3</h3>
              <h4>Build</h4>
              <p>Speak to us for a free digital marketing consultation</p>
            </div>
            <div className="step highlighted-step">
              <h3>4</h3>
              <h4>Launch</h4>
              <p>
                We’ll optimise your solution for maximum return on investment
              </p>
            </div>
            <div className="step">
              <h3>5</h3>
              <h4>After go live</h4>
              <p>Speak to us for a free digital marketing consultation</p>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-container">
      <div className="form-section">
        <h2>Request a Free Call Back</h2>
        <p>Let's get started today.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            placeholder="Company Name" 
            name="companyName" 
            value={formData.companyName}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            placeholder="Mobile Number / Whatsapp" 
            name="mobileNumber" 
            value={formData.mobileNumber}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            placeholder="Phone / Business Number" 
            name="phoneNumber" 
            value={formData.phoneNumber}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <button type="submit">Request A FREE Callback</button>
        </form>
        <p className="disclaimer">
          By submitting this form, you will be sharing your contact details with emarketick Limited. We will call you in accordance with our privacy policy.
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          <p><strong>+92 (0) 312 0444414</strong><br/>MON-THU 8:30AM-6:00PM FRI 8:30AM-5:30PM</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faComments} size="lg" />
          <p><strong>chat with us</strong><br/>READY TO CHAT 24/7 - 7 DAYS A WEEK</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faHeadset} size="lg" />
          <p><strong>visit our support hub</strong><br/>WE ARE HAPPY TO ANSWER ANY OF YOUR QUESTIONS</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default GetConsultation;
