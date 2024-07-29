// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import OurClients from './OurClients'
import SuccessStories from './pages/SuccessStories';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

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
          
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
