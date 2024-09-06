import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';
import stars from "../assets/images/stars.png";
import meta from "../assets/images/meta.png";
import googleAds from "../assets/images/googleAds.png";
import linkedinAds from "../assets/images/linkedinAds.png";
import bingAds from "../assets/images/bingAds.png";
import pinterestAds from "../assets/images/pinterestAds.png";
import social from "../assets/images/social.png";

const Contact = () => {
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

    // Map form data to the fields expected in your EmailJS template
    const templateParams = {
      from_name: formData.name,
      company_name: formData.companyName,
      mobile_number: formData.mobileNumber,
      phone_number: formData.phoneNumber,
      email: formData.email,
      message: 'Your custom message here', // Replace with actual message from form if needed
      reply_to: formData.email,
    };

    emailjs.send(
      'service_8v4t5of',          // Your EmailJS Service ID
      'template_36nusul',         // Your EmailJS Template ID
      templateParams,
      'JoIeL-JI6FWIx4zfF'         // Your EmailJS User ID
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
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <h1>The top-notch marketing solution for your business!</h1>
          <p>By teaming up with eMarketick, you get an unparalleled marketing service while creating a fresh revenue stream for your business</p>
          <ul className="features-list">
            <li> Everything You Need</li>
            <li> Get Talent & Technology</li>
            <li> It's Easy</li>
            <li> Saves You Time</li>
            <li> Saves You Money</li>
            <li> Works Better & Better Over Time</li>
          </ul>
          <p>We're an award-winning company</p>
        </div>
        <div className="form">
          <h2>Request a Free Call Back</h2>
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
      </div>
      <footer className="footer">
        <div className="footer-content">
          <h2>
            Get everything you need to <span>manage and grow</span> your business.
          </h2>
          <div className="reviews">
            <img src={stars} alt="4.5 stars" className="stars" />
            <span>3,500+ Reviews</span>
          </div>
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
    </>
  );
};

export default Contact;
