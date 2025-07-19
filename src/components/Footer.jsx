import React from "react";
import "./Footer.css";
import CARLogo from "../assets/KGN_Car_Hospital_logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={CARLogo} alt="KGN Car Hospital Logo" />
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://wa.me/918602374249" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon whatsapp" />
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaPhone className="icon" /> +91 8602374249</p>
          <p><FaEnvelope className="icon" /> kgncarachospitalno1@gmail.com</p>
          <p><FaMapMarkerAlt className="icon" /> Area, City, Landmark, Pincode</p> 
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 KGN Car Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
