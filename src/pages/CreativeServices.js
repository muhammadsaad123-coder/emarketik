import React from "react";

import "../styles/CreativeServices.css";

import img1 from "../assets/images/creative_img/1.webp";
import img3 from "../assets/images/creative_img/3.webp";
import img4 from "../assets/images/creative_img/4.webp";
import img5 from "../assets/images/creative_img/5.webp";
import img2 from "../assets/images/creative_img/2.webp";
import img6 from "../assets/images/creative_img/6.webp";

import MiniFooter from "../components/MiniFooter";

const CreativeServices = () => {
  return (
    <div className="creative-services-container">
      <header className="creative-services-header">
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

      <div className="creative-card">
        <img src={img1} alt="Land Mark Estate & Builders" />
        <h3>Logo design and branding</h3>
        <p>
          Collaborate with our skilled branding professionals and designers to
          craft the perfect logo and brand for your vision. This comprehensive
          package includes domain name exploration, business card concepts,
          letterhead designs, and more.
        </p>
      </div>
      <div className="creative-card">
        <img src={img2} alt="CouniTree Connects Pvt Limited" />
        <h3>Professional photography</h3>
        <p>
          Potential customers instinctively assess a brand’s quality and its
          offerings based on its visuals. Photographs are powerful sales tools.
          Exceptional photos drive even higher sales. Elevate your sales with
          expert product photography.
        </p>
      </div>
      <div className="creative-card">
        <img src={img3} alt="ICMS Education System" />
        <h3>Video production</h3>
        <p>
          We assist you in identifying your requirements and financial plan to
          develop a video that aligns with both. Whether you seek a
          comprehensive commercial production or a few interviews, we’ve got you
          sorted.
        </p>
      </div>

      <div className="creative-card">
        <img src={img4} alt="ICMS Education System" />
        <h3>Custom animated videos</h3>
        <p>
          Complicated subjects find clarity through animation. Here, creativity,
          not the constraints of physics, guides us. Explore the boundless
          potential of bespoke animation.
        </p>
      </div>

      <div className="creative-card">
        <img src={img5} alt="ICMS Education System" />
        <h3>3D product rendering</h3>
        <p>
          Utilize 3D renders to present your product with a polished and
          professional touch. In addition to interactive renders, we specialize
          in crafting videos and photos to effectively showcase your product.
        </p>
      </div>

      <div className="creative-card">
        <img src={img6} alt="ICMS Education System" />
        <h3>Swag and apparel</h3>
        <p>
          Elevate your brand with customized team swag and apparel! Just inform
          us of your requirements and deadlines, and we’ll handle everything
          else seamlessly.
        </p>
      </div>

      <MiniFooter />
    </div>
  );
};

export default CreativeServices;
