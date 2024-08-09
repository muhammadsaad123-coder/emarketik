import React from "react";

import Benefits from "../components/Benefits";
import MiniFooter from "../components/MiniFooter";
import L1 from "../assets/images/analytics_img/L1.webp";
import analytics from "../assets/images/analytics_img/analytics.webp";
import img1 from "../assets/images/analytics_img/1.webp";
import img2 from "../assets/images/analytics_img/2.webp";
import img3 from "../assets/images/analytics_img/3.webp";
import img4 from "../assets/images/analytics_img/4.webp";
import img5 from "../assets/images/analytics_img/5.webp";

const Analytics = () => {
  return (
    <div className="smm-container">
      <div className="logo-container">
        <img src={L1} alt="Land Mark Estate & Builders" className="logo" />
        <span className="social-text">emarketick Analytics & Clarity</span>
      </div>
      <h1>In-depth reporting you need to win</h1>
      <p>
        Unlock the power of eMarketick Analytics for comprehensive insights that
        drive success. No more tangled analytics dashboards-just
        straightforward, actionable reports and tools honed to elevate your
        brand. Dive in today to discover our plans and pricing options.
      </p>
      <button className="smm-button">Plans & Pricing</button>

      <h3>
        eMarketick Analytics equips you with the reporting and tools necessary
        to...
      </h3>

      <div>
        <img src={analytics} alt="Social Media Example" className="img1" />
        <h1>
          eMarketick Analytics equips you with the reporting and tools necessary
          to...
        </h1>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Make data-driven decisions</h1>
          <p>
            Leverage eMarketick to make data-driven decisions. Consolidate
            business analytics, sales reporting, and marketing performance
            within a single platform. Empower yourself to manage and expand your
            business intelligently.
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
          <h1>Track calls, leads and sales</h1>
          <p>
            Monitor calls, leads, and sales ezortlessly with the Leads and Sales
            Inbox feature of eMarketick. Consolidate all your call, lead, and
            sale data in one convenient location. Access detailed information
            for each call, lead, or sale, including the originating marketing
            channel, call recordings, and more.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Make your marketing better</h1>
          <p>
            Enhance your marketing efforts with eMarketick. By focusing on
            what’s effective and eliminating what’s not, you can optimize your
            strategies. Gain insights through accurate reporting to discern what
            yields the best results, empowering you to reinvest intelligently.
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
          <h1>Improve website performance</h1>
          <p>
            Enhance your website’s performance seamlessly with eMarketick. Say
            goodbye tonavigating through complex third-party website analytics
            tools. Access all essential data ina user-friendly format,
            conveniently consolidated in one place.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Compare period over period</h1>
          <p>
            Effortlessly compare results between diñerent periods with
            eMarketick. Instantly gauge whether adjustments in your strategy
            have yielded positive outcomes, enabling swiñ adaptations to enhance
            performance over time.
          </p>
          <div className="hero-buttons">
            <button className="signup-button">Plan & Pricing</button>
          </div>
        </div>
        <div className="hero-images">
          <img src={img5} alt="Main" className="main-image" />
        </div>
      </div>

      <Benefits />

      <MiniFooter />
    </div>
  );
};

export default Analytics;
