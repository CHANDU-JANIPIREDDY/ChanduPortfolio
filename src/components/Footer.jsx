import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="footer-name">CHANDU JANIPIREDDY</span>. All Rights Reserved.
        </p>

        
        <div className="footer-contact">
          <a href="mailto:cjanipireddy@gmail.com" className="contact-link">
            <FaEnvelope /> cjanipireddy@gmail.com
          </a>
          <a href="tel:+917680914066" className="contact-link">
            <FaPhone /> +91 7680914066
          </a>
        </div>

        
        <div className="footer-socials">
          <a href="https://github.com/CHANDU-JANIPIREDDY" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chandu-janipireddy/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_chandu__104/?__pwa=1" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
