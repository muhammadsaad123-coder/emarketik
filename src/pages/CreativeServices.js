import React from "react";

import "../styles/CreativeServices.css";

import img1 from "../assets/images/creative_img/1.webp";
import img3 from "../assets/images/creative_img/3.webp";
import img4 from "../assets/images/creative_img/4.webp";
import img5 from "../assets/images/creative_img/5.webp";
import img2 from "../assets/images/creative_img/2.webp"; // Add actual image paths
import img6 from "../assets/images/creative_img/6.webp";

import stars from "../assets/images/stars.png";
import meta from "../assets/images/meta.png";
import googleAds from "../assets/images/googleAds.png";
import linkedinAds from "../assets/images/linkedinAds.png";
import bingAds from "../assets/images/bingAds.png";
import pinterestAds from "../assets/images/pinterestAds.png";
import social from "../assets/images/social.png";

const CreativeServices = () => {
  return (
    <div className="success-stories-container">
      <header className="success-stories-header">
        <h2>Creative Services</h2>
        <p>
          When we say “everything,” we mean exactly that. In addition to
          cutting-edge technology, you gain access to professional creative
          talent from the UK, USA, Canada, and Pakistan. Whether you need a
          stunning logo, branded merchandise, bespoke video content, or
          personalized stationery, our diverse team ensures your business is
          represented authentically and effectively.
        </p>
      </header>

      <div className="story-card">
        <img src={img1} alt="Land Mark Estate & Builders" />
        <h3>
          Land Mark Estate & Builders | Director Sales & Marketing Junaid Janjua
        </h3>
        <p>
          “Junaid Janjua, the Director of Sales & Marketing at Land Mark Estate
          & Builders, embarked on a journey with eMarketick Digital Marketing
          Agency to elevate their brand presence. With strategic guidance and
          tailored marketing solutions, Land Mark witnessed a significant surge
          in leads and conversions. Through a collaborative effort, Junaid and
          the eMarketick team effectively showcased their properties, resulting
          in accelerated growth and enhanced market visibility.”
        </p>
      </div>
      <div className="story-card">
        <img src={img2} alt="CouniTree Connects Pvt Limited" />
        <h3>CouniTree Connects Pvt Limited | CEO</h3>
        <p>
          “Naeem Asmat, CEO of Countree Concepts Pvt Limited, sought to expand
          the reach and impact of their brand. Partnering with eMarketick
          Digital Marketing Agency proved to be the catalyst for their success.
          With innovative strategies and targeted campaigns, Countree Concepts
          experienced a remarkable increase in brand awareness and customer
          engagement. Naeem’s vision, combined with eMarketick’s expertise,
          propelled the company to new heights of success.”
        </p>
      </div>
      <div className="story-card">
        <img src={img3} alt="ICMS Education System" />
        <h3>ICMS Education System | Mr. Tajammul Hayat</h3>
        <p>
          "Mr. Tajammul Hayat, representing ICMS Education System, recognized
          the importance of digital marketing in today's competitive landscape.
          Teaming up with eMarketick Digital Marketing Agency, they embarked on
          a journey to enhance their online presence. The result? A successful
          digital transformation, improved brand visibility, and increased
          enrollment for ICMS."
        </p>
      </div>

      <div className="story-card">
        <img src={img4} alt="ICMS Education System" />
        <h3>ICMS Education System | Mr. Tajammul Hayat</h3>
        <p>
          “Mr. Tajamul Hayat, representing ICMS Education System, recognized the
          importance of digital marketing in today’s competitive landscape.
          Teaming up with eMarketick Digital Marketing Agency proved to be a
          game-changer for ICMS. With a focus on student recruitment and brand
          promotion, Tajamul witnessed a surge in enrollment numbers and
          heightened brand recognition. Through innovative marketing strategies
          and effective collaboration, ICMS Education System flourished under
          Tajamul’s leadership.”
        </p>
      </div>

      <div className="story-card">
        <img src={img5} alt="ICMS Education System" />
        <h3>AMS Marketing & Real Estate</h3>
        <p>
          “AMS Marketing & Real Estate enlisted the expertise of eMarketick
          Digital Marketing Agency to enhance their digital footprint and
          increase property sales. With a focus on targeted advertising and
          compelling content, AMS Marketing & Real Estate witnessed a
          significant boost in property inquiries and conversions. Through
          effective digital strategies and seamless collaboration, AMS Marketing
          & Real Estate solidified its position as a leader in the real estate
          industry.”
        </p>
      </div>

      <div className="story-card">
        <img src={img6} alt="ICMS Education System" />
        <h3>Business Hosting Pakistan</h3>
        <p>
          “Business Hosting Pakistan, a premier web hosting provider, partnered
          with eMarketick Digital Marketing Agency to strengthen their online
          presence and attract new customers. With a strategic approach to
          digital marketing and personalized campaigns, Business Hosting
          Pakistan experienced a surge in website traffic and customer
          acquisition. Through continuous optimization and data-driven insights,
          Business Hosting Pakistan achieved remarkable growth and customer
          satisfaction.”
        </p>
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

export default CreativeServices;
