// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurClients from "./pages/OurClients";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import CreativeServices from "./pages/CreativeServices";
import SMM from "./pages/SMM";
import Marketing from "./pages/Marketing";
import EmailMarketing from "./pages/EmailMarketing";
import Analytics from "./pages/Analytics";
import CRM from "./pages/CRM";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creative-services" element={<CreativeServices />} />
          <Route path="/smm" element={<SMM />} />
          <Route path="/marketing-team" element={<Marketing />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/analytics-clarity" element={<Analytics />} />
          <Route path="/crm-system" element={<CRM />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
