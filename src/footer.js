import React from "react";
import "./footer.css";
import Lingo from "../src/Lingo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section site-name">
          <h4>Luminar Design Co.</h4>
          <p>Your Slogan Here</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#aim">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <p><i className="fas fa-envelope"></i> luminardesignco@gmail.com</p>
          <p><i className="fas fa-phone"></i> +94 77 777 7777</p>
          <p><i className="fas fa-map-marker-alt"></i> West Australia, Australia.</p>
        </div>
      </div>

      <div className="alrights"><br />
        <p className="copyright">© Copyright 2025, Luminar Design Co. All Right Reserved.</p>
        <p className="developer">
          Design and Developed by :- 
          <a href="http://wa.me/94754841586"><br />
            <img src={Lingo} alt="lingo" className="lingo" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
