import React from "react";

import "../styles/Marketing.css";
import Benefits from "../components/Benefits";
import MiniFooter from "../components/MiniFooter";
import L8 from "../assets/images/smm/L8.webp";
import emailmark from "../assets/images/email-marketing/emailmark.webp";
import img1 from "../assets/images/email-marketing/1.webp";
import img2 from "../assets/images/email-marketing/2.webp";
import img3 from "../assets/images/email-marketing/3.webp";
import img4 from "../assets/images/email-marketing/4.webp";
import img5 from "../assets/images/email-marketing/5.webp";
import img6 from "../assets/images/email-marketing/6.webp";
import img7 from "../assets/images/email-marketing/7.webp";

const EmailMarketing = () => {
  return (
    <div className="smm-container">
      <div className="logo-container">
        <img src={L8} alt="Land Mark Estate & Builders" className="logo" />
        <span className="social-text">OUR MARKETING TEAM</span>
      </div>
      <h1>Stay top of mind with email and text</h1>
      <p>
        Nurture your leads, customers and more with effective email and text
        message marketing. Send the right campaign, at the right time, to the
        right person to boost sales. Get started today to learn more and explore
        plans and pricing.
      </p>
      <button className="smm-button">Plans & Pricing</button>

      <h3>
        We Provide Services to Manage Your Social Media Profiles and Websites
      </h3>

      <div>
        <img src={emailmark} alt="Social Media Example" className="img1" />
        <h1>Nurture gives you the leverage of…</h1>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Campaigns for all industries</h1>
          <p>
            Use popular email templates and campaigns for your industry, or
            create your own with easy-to-use tools you’ll love. Tour by
            industry.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img1} alt="Main" className="main-image" />
        </div>
      </div>

      {/* develop section left image */}
      <div className="hero-section">
        <div className="hero-images">
          <img src={img2} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h1>Email marketing automation</h1>
          <p>
            It doesn’t get any easier to automate your marketing. Set up
            beautiful automated email campaigns that send the right message to
            the right lead, customer or contact at the right time.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Beautiful, modern templates</h1>
          <p>
            Browse and select from a huge library of professional email
            templates specific to your industry and beyond. Find the one you
            like best, then simply click, customize and send!
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img3} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-images">
          <img src={img4} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h1>Eye-catching personalization</h1>
          <p>
            Personalize your email campaigns by dynamically adding such things
            as the recipient’s name to the subject line or content in seconds.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Easy text message marketing</h1>
          <p>
            There’s no easier or faster way to create text message marketing
            campaigns and start building your subscriber list. Perfect for
            things, like special deals, real-time updates and more.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img5} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-images">
          <img src={img6} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h1>Insights to help you improve</h1>
          <p>
            Explore campaign performance so you can do more of what works and
            less of what doesn’t over time in order to drive the results you’re
            looking for.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Fully integrated campaigns</h1>

          <p>
            Unlock the power of automation by using a platform that’s fully
            integrated. This allows you to do things, like send an email asking
            for a review the day after a new customer makes a purchase, without
            ever lifting a finger.
          </p>

          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img7} alt="Main" className="main-image" />
        </div>
      </div>

      <Benefits />

      <MiniFooter />
    </div>
  );
};

export default EmailMarketing;
