import React from "react";
import "../styles/SMM.css";
import L10 from "../assets/images/smm/L10.webp";
import img1 from "../assets/images/smm/1.webp";
import img2 from "../assets/images/smm/2.webp";
import img3 from "../assets/images/smm/3.webp";
import img4 from "../assets/images/smm/4.webp";
import img5 from "../assets/images/smm/5.webp";
import img6 from "../assets/images/smm/6.webp";
import group from "../assets/images/group.png";
import L1 from "../assets/images/smm/logo1.webp";
import L2 from "../assets/images/smm/L2.webp";
import L3 from "../assets/images/smm/L3.webp";
import L4 from "../assets/images/smm/L4.webp";
import L5 from "../assets/images/smm/L5.webp";
import L6 from "../assets/images/smm/L6.webp";
import L7 from "../assets/images/smm/L7.webp";
import L8 from "../assets/images/smm/L8.webp";
import L9 from "../assets/images/smm/L9.webp";
import L11 from "../assets/images/smm/L11.webp";
import L12 from "../assets/images/smm/L12.webp";



import stars from "../assets/images/stars.png";
import meta from "../assets/images/meta.png";
import googleAds from "../assets/images/googleAds.png";
import linkedinAds from "../assets/images/linkedinAds.png";
import bingAds from "../assets/images/bingAds.png";
import pinterestAds from "../assets/images/pinterestAds.png";
import social from "../assets/images/social.png";


const SMM = () => {
  return (
    <div className="smm-container">
      <div className="logo-container">
        <img src={L10} alt="Land Mark Estate & Builders" className="logo" />
        <span className="social-text">SOCIAL</span>
      </div>
      <h1>We Refine Your Social Media Presence.</h1>
      <p>
        Finally, the answer to keeping your brand active and engaged on social!
        Discover the solution to effortlessly maintaining your brand's vitality
        and interaction on social platforms, all while saving valuable time and
        energy. Begin today to uncover further details, and delve into available
        packages and rates. Avoid multitasking so much time and effort. Get
        started today to learn more and explore plans without requiring so much
        time and effort.
      </p>
      <button className="smm-button">Plans & Pricing</button>

      <h6>
        We Provide Services to Manage Your Social Media Profiles and Websites
      </h6>

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
        <div className="hero-images">
          <img src={img6} alt="Main" className="main-image" />
        </div>
      </div>

      <div className="container">
        <div className="lastbutton">
          <h2 style={{ fontSize: "2em", color: "#333" }}>
            Let us assist in overseeing your online presence
          </h2>
          <h4 style={{ color: "#333" }}>
            Experience an all-inclusive solution for achieving success on the
            web. Benefit from innovative designs and a committed marketing team
            dedicated to nurturing and expanding your business through our
            services.
          </h4>
          <img
            style={{ width: "60%", height: "auto" }}
            src={group}
            alt="Main"
            className="main-image"
          />
          <button className="quote-button">Plan and Pricing</button>
        </div>

        
      </div>

      {/* New Section */}
      <div className="services-section">
        <div className="services-header">

        <div className="services-header">
    <h2 className="services-title">Moreover, enjoy all of these exceptional benefits.</h2>
   
  
  </div>
        </div>
        <div className="services-grid">
          <div className="service-box">
            <img src={L1} alt="Marketing Team" className="service-logo" />
            <h3>Marketing Team</h3>
            <p>Turbocharge your marketing</p>
          </div>
          <div className="service-box">
            <img src={L2} alt="Website Management" className="service-logo" />
            <h3>Website Management</h3>
            <p>We Manage Your Website</p>
          </div>
          <div className="service-box">
            <img src={L3} alt="Ecommerce" className="service-logo" />
            <h3>Ecommerce</h3>
            <p>Sell your products using our e-commerce solution</p>
          </div>
          <div className="service-box">
            <img src={L4} alt="Payments" className="service-logo" />
            <h3>Payments</h3>
            <p>Get paid easier, faster, your way</p>
          </div>
          <div className="service-box">
            <img src={L5} alt="Point of Sale" className="service-logo" />
            <h3>Point of Sale</h3>
            <p>All-in-one business management</p>
          </div>
          <div className="service-box">
            <img src={L6} alt="CRM" className="service-logo" />
            <h3>CRM</h3>
            <p>Stay organized as you scale and grow</p>
          </div>
          <div className="service-box">
            <img src={L7} alt="Forms" className="service-logo" />
            <h3>Forms</h3>
            <p>We Create forms for anything</p>
          </div>
          <div className="service-box">
            <img src={L8} alt="Email Marketing" className="service-logo" />
            <h3>Email Marketing</h3>
            <p>Stay top of mind with email and text</p>
          </div>
          <div className="service-box">
            <img src={L9} alt="Reputation" className="service-logo" />
            <h3>Reputation</h3>
            <p>Gain the edge of a good reputation</p>
          </div>
          <div className="service-box">
            <img src={L10} alt="Social" className="service-logo" />
            <h3>Social</h3>
            <p>Streamline your social media</p>
          </div>
          <div className="service-box">
            <img src={L11} alt="Content" className="service-logo" />
            <h3>Content</h3>
            <p>Level up your content marketing</p>
          </div>
          <div className="service-box">
            <img src={L12} alt="Ads" className="service-logo" />
            <h3>Ads</h3>
            <p>Fuel growth with multi-channel ads</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <h2>
            Get everything you need to <span>manage and grow</span> your
            business.
          </h2>
          <button className="plans-pricing">Plans & Pricing</button>
          <p>
            We Provide Services to Manage Your Social Media Profiles and
            Websites Working on Below Platforms
          </p>
          <div className="reviews">
            <img src={stars} alt="4.5 stars" className="stars" />
            <span>3,500+ Reviews</span>
          </div>
          <div className="social-media-logos">
            <img src={meta} alt="Meta" />
            <img src={social} alt="social" />
            <img src={googleAds} alt="Google Ads" />
            <img src={linkedinAds} alt="LinkedIn Ads" />
            <img src={bingAds} alt="Bing Ads" />
            <img src={pinterestAds} alt="Pinterest Ads" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SMM;
