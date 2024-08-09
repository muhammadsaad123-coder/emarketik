import React from 'react'
import L1 from "../assets/images/smm/logo1.webp";
import L2 from "../assets/images/smm/L2.webp";
import L3 from "../assets/images/smm/L3.webp";
import L4 from "../assets/images/smm/L4.webp";
import L5 from "../assets/images/smm/L5.webp";
import L6 from "../assets/images/smm/L6.webp";
import L7 from "../assets/images/smm/L7.webp";
import L8 from "../assets/images/smm/L8.webp";
import L9 from "../assets/images/smm/L9.webp";
import L10 from "../assets/images/smm/L10.webp";
import L11 from "../assets/images/smm/L11.webp";
import L12 from "../assets/images/smm/L12.webp";

const Benefits = () => {
  return (
    <div className="services-section">
    <div className="services-header">
      <div className="services-header">
        <h2 className="services-title">
          Moreover, enjoy all of these exceptional benefits.
        </h2>
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
  )
}

export default Benefits