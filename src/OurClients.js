import React from "react";
import "./OurClients.css";
import clients from "./assets/images/clients.jpg";
import client1 from "./assets/images/client1.webp"

const OurClients = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-content">
        <h1>Our Clients</h1>
        <p>We Help Brands Play a Meaningful Role in people’s Lives</p>
        <div className="aboutlogo">
          <img src={clients} alt="Emarketick Logo" />
        </div>

        <div className="aboutlogo">
          <img src={client1} alt="Emarketick Logo" />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
