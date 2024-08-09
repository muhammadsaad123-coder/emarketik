import React from "react";
import "../styles/OurClients.css";

import MiniFooter from "../components/MiniFooter";
import clients from "../assets/images/clients.jpg";
import img1 from "../assets/images/client_img/1.webp";
import img2 from "../assets/images/client_img/2.webp";
import img3 from "../assets/images/client_img/3.webp";
import img4 from "../assets/images/client_img/4.webp";
import img5 from "../assets/images/client_img/5.webp";
import img6 from "../assets/images/client_img/6.webp";
import img7 from "../assets/images/client_img/7.webp";
import img8 from "../assets/images/client_img/8.webp";
import img9 from "../assets/images/client_img/9.webp";
import img10 from "../assets/images/client_img/10.webp";
import img11 from "../assets/images/client_img/11.webp";
import img12 from "../assets/images/client_img/12.webp";
import img13 from "../assets/images/client_img/13.webp";
import img14 from "../assets/images/client_img/14.webp";
import img15 from "../assets/images/client_img/15.webp";
import img16 from "../assets/images/client_img/16.webp";
import img17 from "../assets/images/client_img/17.webp";
import img18 from "../assets/images/client_img/18.webp";
import img19 from "../assets/images/client_img/19.webp";
import img20 from "../assets/images/client_img/20.webp";
import img21 from "../assets/images/client_img/21.webp";
import img22 from "../assets/images/client_img/22.webp";
import img23 from "../assets/images/client_img/23.webp";
import img24 from "../assets/images/client_img/24.webp";

const OurClients = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-content">
        <h1>Our Clients</h1>
        <p>We Help Brands Play a Meaningful Role in people’s Lives</p>
        <div className="aboutlogo">
          <img src={clients} alt="Emarketick Logo" />
        </div>

        <div className="client-logos-grid">
          <img src={img1} alt="Client Logo 1" />
          <img src={img2} alt="Client Logo 2" />
          <img src={img3} alt="Client Logo 3" />
          <img src={img4} alt="Client Logo 4" />
          <img src={img5} alt="Client Logo 5" />
          <img src={img6} alt="Client Logo 6" />
          <img src={img7} alt="Client Logo 7" />
          <img src={img8} alt="Client Logo 8" />
          <img src={img9} alt="Client Logo 9" />
          <img src={img10} alt="Client Logo 10" />
          <img src={img11} alt="Client Logo 11" />
          <img src={img12} alt="Client Logo 12" />
          <img src={img13} alt="Client Logo 13" />
          <img src={img14} alt="Client Logo 14" />
          <img src={img15} alt="Client Logo 15" />
          <img src={img16} alt="Client Logo 16" />
          <img src={img17} alt="Client Logo 17" />
          <img src={img18} alt="Client Logo 18" />
          <img src={img19} alt="Client Logo 19" />
          <img src={img20} alt="Client Logo 20" />
          <img src={img21} alt="Client Logo 21" />
          <img src={img22} alt="Client Logo 22" />
          <img src={img23} alt="Client Logo 23" />
          <img src={img24} alt="Client Logo 24" />
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default OurClients;
