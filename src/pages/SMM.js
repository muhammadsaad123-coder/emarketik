import React from 'react';
import "../styles/SMM.css"; // Make sure to import your CSS file
import L10 from "../assets/images/smm/L10.webp";
import img1 from '../assets/images/smm/1.webp'; 
import img2 from '../assets/images/smm/2.webp'; 
import img3 from '../assets/images/smm/3.webp'; 
import img4 from '../assets/images/smm/4.webp'; 
import img5 from '../assets/images/smm/5.webp'; 
// import img6 from '../assets/images/smm/6.webp'; 

const SMM = () => {
  return (
    <div className="smm-container">
      <div className="logo-container">
        <img src={L10} alt="Land Mark Estate & Builders" className="logo" />
        <span className="social-text">SOCIAL</span>
      </div>
      <h1>We Refine Your Social Media Presence.</h1>
      <p>Finally, the answer to keeping your brand active and engaged on social! Discover the solution to effortlessly maintaining your brand's vitality and interaction on social platforms, all while saving valuable time and energy. Begin today to uncover further details, and delve into available packages and rates. Avoid multitasking so much time and effort. Get started today to learn more and explore plans without requiring so much time and effort.</p>
      <button className="smm-button">Plans & Pricing</button>

      <h6> We Provide Services to Manage Your Social Media Profiles and Websites </h6>
      
      

      <div>
      <img src={img1} alt="Social Media Example" className="img1" /> 

      <h1>Social makes it less time-consuming and complex to...</h1>

      </div>

      

      <div className="hero-section">
        <div className="hero-content">
          <h2>OUR MARKETING TEAM</h2>
          <h1>Turbocharge your Digital Marketing</h1>
          <p>
            Leverage industry specific marketing programs and a dedicated
            marketing team to grow your business while you focus on running it.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img2} alt="Main" className="main-image" />
        </div>
      </div>

      {/* develop section left image */}

      <div className="hero-section">
        <div className="hero-images">
          <img src={img3} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h2>WEBSITE DEVELOPMENT SERVICE</h2>
          <h1>We Develop Website or Online Store</h1>
          <p>
            Emarketick Limited offers top-notch website and online store
            development services, crafting tailored solutions to elevate
            businesses’ online presence and sales.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h2>ECOMMERCE DEVELOPMENT & MANAGEMENT</h2>
          <h1>Sell your products online</h1>
          <p>
            Emarketick excels in ecommerce development, creating seamless online
            shopping experiences, and offers expert management services for
            optimizing e-commerce websites.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img4} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-images">
          <img src={img5} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h2>PAYMENTS GATEWAY INTEGRATIONS AND API'S</h2>
          <h1>Accept and manage payments</h1>
          <p>
            Emarketick ensures secure transactions by integrating versatile
            payment gateways and efficiently manages APIs to enhance website
            functionality and user experience.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h2>ONLINE POINT OF SALE</h2>
          <h1>Simplify business management</h1>
          <p>
            Emarketick offers online point of sale solutions, enabling
            businesses to streamline transactions and manage sales efficiently
            in the digital marketplace.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        </div>
     
    </div>
  );
};

export default SMM;
