import React from 'react'
import "../styles/MiniFooter.css"

import stars from "../assets/images/stars.png";
import meta from "../assets/images/meta.png";
import googleAds from "../assets/images/googleAds.png";
import linkedinAds from "../assets/images/linkedinAds.png";
import bingAds from "../assets/images/bingAds.png";
import pinterestAds from "../assets/images/pinterestAds.png";
import social from "../assets/images/social.png";


const MiniFooter = () => {
  return (
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
  )
}

export default MiniFooter