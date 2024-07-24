// src/AboutUs.js
import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* <Navbar /> */}
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to Emarketick! We are a leading digital marketing agency dedicated to helping small businesses grow and succeed online. Our team of experts specializes in a range of services, including social media marketing, website development, e-commerce solutions, and more.
        </p>
        <p>
          Our mission is to provide comprehensive digital marketing solutions that drive results. We work closely with our clients to understand their unique needs and tailor our services to meet their goals.
        </p>
        <p>
          Thank you for choosing Emarketick. We look forward to helping your business thrive.
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
