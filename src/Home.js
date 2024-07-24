import React from "react";
import "./Home.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import mainImage from "./assets/images/homeimg.png";
import plan from "./assets/images/plan.png";
import develop from "./assets/images/develop.png";
import sell from "./assets/images/sell.png";
import payment from "./assets/images/payment.png";
import online from "./assets/images/online.png";
import crm from "./assets/images/CRM.png";
import forms from "./assets/images/forms.png";
import email from "./assets/images/email.png";
import text from "./assets/images/text.png";
import media from "./assets/images/media.png";
import review from "./assets/images/review.png";
import seo from "./assets/images/seo.png";
import ads from "./assets/images/ads.png";
import mobile from "./assets/images/mobile.png";
import group from "./assets/images/group.png";

import stars from "./assets/images/stars.png";
import meta from "./assets/images/meta.png";
import googleAds from "./assets/images/googleAds.png";
import linkedinAds from "./assets/images/linkedinAds.png";
import bingAds from "./assets/images/bingAds.png";
import pinterestAds from "./assets/images/pinterestAds.png";
import social from "./assets/images/social.png";



const Home = () => {
  return (
    <div className="home">
      {/* <Navbar /> */}

      <div className="hero-section">
        <div className="hero-content">
          <h1>Get everything you need to manage and grow your</h1>
          <p>
            The tools you need to scale and the marketing programs and talent
            you need to grow — all from a singular platform.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Signup / Login</button>
            <button className="watch-video-button">Watch video</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={mainImage} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="info-section">
        <h2>#1 Marketing Company emarketick Limited® for Small Business</h2>
        <h3>Small Business</h3>
        <p>
          Over 15,00+ small businesses use emarketick Limited services to manage
          and grow their business. Not only do you get the marketing
          consultation you need to scale, but you also get the do-it-for-you
          marketing programs you need to grow — all in one platform. Powered by
          emarketick Limited
        </p>
      </div>

      {/* right image */}

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
          <img src={plan} alt="Main" className="main-image" />
        </div>
      </div>

      {/* develop section left image */}

      <div className="hero-section">
        <div className="hero-images">
          <img src={develop} alt="Main" className="main-image" />
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
          <img src={sell} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-images">
          <img src={payment} alt="Main" className="main-image" />
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
          <img src={online} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-images">
          <img src={crm} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h2>ONLINE CRM SYSTEM</h2>
          <h1>Stay organized your way</h1>
          <p>
            Emarketick delivers comprehensive online CRM systems, empowering
            businesses to effectively manage customer relationships and optimize
            interactions for sustained growth and success.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h2>FORMS CREATION AND DEPLOYMENT ON WEBSITES</h2>
          <h1>Create custom forms</h1>
          <p>
            Emarketick specializes in crafting custom forms tailored to
            businesses’ needs and seamlessly deploying them on websites for
            enhanced user engagement and data collection.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={forms} alt="Main" className="main-image" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-images">
          <img src={email} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h2>EMAIL MARKETING INTEGRATION</h2>
          <h1>Send automated emails</h1>
          <p>
            Emarketick automates email sending processes, delivering timely and
            personalized messages to target audiences, fostering customer
            engagement and driving conversions effectively.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h2>TEXT MARKETING / BRANDED SMS INTEGRATION</h2>
          <h1>Nurture customers via text</h1>
          <p>
            Emarketick offers branded SMS integration services through APIs,
            enabling businesses to send customized text messages, enhancing
            communication and engagement with their audience effectively.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={text} alt="Main" className="main-image" />
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-images">
          <img src={media} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h2>SOCIAL MEDIA MANAGMENT SERVICES</h2>
          <h1>We Control Your Social Media Profiles</h1>
          <p>
            Emarketick offers comprehensive social media management services,
            taking charge of businesses’ profiles to enhance online presence,
            engage audiences, and drive growth strategies effectively.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h2>REPUTATION REVIEWS MANAGEMENT</h2>
          <h1>Stand out with excellent reviews</h1>
          <p>
            Emarketick offers review management services, ensuring businesses
            maintain positive online reputations by managing and responding to
            customer feedback effectively and promptly.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={review} alt="Main" className="main-image" />
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-images">
          <img src={seo} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h2>SEO SERVICES FOR YOUR BUSINESS</h2>
          <h1>Show up at the top of Search</h1>
          <p>
            Emarketick provides comprehensive SEO services and search ad
            management, optimizing websites to rank higher in search results and
            driving targeted traffic for enhanced visibility and conversions.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h2>ADS / MEDIA BUYING SERVICES</h2>
          <h1>Run ads where it counts</h1>
          <p>
            Emarketick delivers targeted advertising and media buying services,
            strategizing campaigns to maximize ROI and amplify businesses’
            online visibility effectively.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={ads} alt="Main" className="main-image" />
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-images">
          <img src={mobile} alt="Main" className="main-image" />
        </div>
        <div className="hero-content">
          <h2>emarketick Mobile App Coming Soon</h2>
          <h1>Manage All From Your Phone</h1>
          <p>
            Manage your team and customers using our mobile app coming soon so
            you stay organized with projects and deals you’re working on every
            day.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">COMING SOON</button>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="lastbutton">
      <h2 style={{ fontSize: '2em', color: '#333' }}>See how emarketick Limited® works for your business.</h2>
        <img style={{width:'60%' , height:'auto'}}src={group} alt="Main" className="main-image" />
        <button className="quote-button">Get a Free Quote</button>
      </div>
    </div>

    <footer className="footer">
      <div className="footer-content">
        <h2>
          Get everything you need to <span>manage and grow</span> your business.
        </h2>
        <button className="plans-pricing">Plans & Pricing</button>
        <p>
          We Provide Services to Manage Your Social Media Profiles and Websites
          Working on Below Platforms
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

    {/* <Footer/> */}
    </div>
  );
};

export default Home;
