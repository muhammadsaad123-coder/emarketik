import React from "react";
import "../styles/AboutUs.css";

import MiniFooter from "../components/MiniFooter";
import logo from "../assets/images/logo.webp";
import about from "../assets/images/about.png";
import about2 from "../assets/images/about2.jpg";

import meta from "../assets/images/meta.png";
import googleAds from "../assets/images/googleAds.png";
import linkedinAds from "../assets/images/linkedinAds.png";
import bingAds from "../assets/images/bingAds.png";
import pinterestAds from "../assets/images/pinterestAds.png";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-content">
        <div className="aboutlogo">
          <img src={logo} alt="Emarketick Logo" />
        </div>
        <h1>We want to make a difference</h1>
        <p>
          At eMarketick Digital Marketing Agency, our passion lies in making a
          positive impact on small businesses and their local communities. We’re
          driven every day by the knowledge that our work can significantly
          benefit the world. We understand the vital role that local businesses
          play in creating jobs, supporting families, contributing to charities,
          and fostering community growth. This is what motivates us.
        </p>
        <p>
          We believe in empowering small businesses with the necessary
          technology and expertise to manage and expand their operations
          efficiently. That’s why we’ve developed eMarketick, a comprehensive
          digital marketing solution tailored to the needs of small businesses.
          With eMarketick, you can say goodbye to the hassle of juggling
          multiple tools and platforms. Our all-in-one solution provides
          everything you need under one roof – from marketing to management –
          all at an affordable monthly rate. Let us help your business thrive
          and shine in your community.
        </p>

        <div className="aboutlogo">
          <img src={about} alt="About Logo" />
        </div>

        <h1>We have a championship team</h1>

        <p>
          At eMarketick Digital Marketing Agency, we’re proud to boast about our
          championship team. We’re not only confident in the superiority of our
          platform, eMarketick, but we also believe wholeheartedly in the
          exceptional skills and dedication of our team members. We thrive on
          being part of a winning team that consistently delivers top-notch
          performance and makes a meaningful impact every single day. Get to
          know our team and witness firsthand the passion they bring to the
          table in supporting the growth of small businesses. Watch our video
          and see the difference our team can make.
        </p>

        <div className="aboutlogo">
          <img src={about2} alt="About Logo" />
        </div>

        <h1>Our history</h1>

        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h2>2015</h2>
              <p>Started Business with name of TRY SERVICES NETWORK</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h2>2017</h2>
              <p>
                Started Office in Islamabad in location of F-7 Markaz Islamabad
              </p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h2>2020</h2>
              <p>Started Business in UK with name of TRY SERVICES LIMITED</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h2>2023</h2>
              <p>Expanded Business Operation in Pakistan, UK, and USA Market</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h2>2024</h2>
              <p>
                Re Branded With Name of emarketick (formerly TRY SERVICES UK
                LIMITED)
              </p>
            </div>
          </div>
        </div>

        <h1>Our Partnership</h1>

        <div className="socialmedia">
          <img src={googleAds} alt="Google Ads" className="socialimage" />
          <p>
            Dominate search engine results with our expertly crafted Google Ads
            campaigns, driving targeted traffic and boosting conversions.
          </p>
        </div>

        <div className="socialmedia">
          <img src={meta} alt="Meta" className="socialimage" />
          <p>
            Engage your audience on Facebook and Instagram with our Meta Ads
            services, leveraging social media advertising for enhanced brand
            visibility and customer engagement.
          </p>
        </div>

        <div className="socialmedia">
          <img src={linkedinAds} alt="LinkedIn Ads" className="socialimage" />
          <p>
            Connect with professionals and decision-makers on LinkedIn through
            our tailored ad campaigns, driving quality leads and business
            growth.
          </p>
        </div>

        <div className="socialmedia">
          <img src={bingAds} alt="Bing Ads" className="socialimage" />
          <p>
            Expand your reach beyond Google with our Bing Ads solutions, tapping
            into a diverse audience base and maximizing ad exposure.
          </p>
        </div>

        <div className="socialmedia">
          <img src={pinterestAds} alt="Pinterest Ads" className="socialimage" />
          <p>
            Tap into the visual discovery platform with our Pinterest Ads
            services, capturing audience attention and driving traffic to your
            website with visually stunning campaigns.
          </p>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default AboutUs;
