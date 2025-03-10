import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="hero-section">
      <nav className="navbar">
        <div className="logo">Luminar Design Co.</div>
        <ul className="nav-links">
          <li>
            <a href="#home" className="italic">
              Home
            </a>
          </li>
          <li>
            <a href="#aim">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <button className="contact-btn"><a href="#contact">Contact Us</a></button>
          </li>
        </ul>
      </nav>

      <section id="home">
        <div className="hero-content">
          <p className="subheading">Smart. Simple. Effective.</p>
          <div className="line-effect"></div>
          <div className="heading-box">
            <h1 className="main-heading">The Premier Web Design and</h1>
            <h1 className="main-heading">
              Software Development Agency for Thriving Accommodation Brands
            </h1>
          </div>
          <p className="description">
            Luminar Design Co. is an innovative, full-service digital agency.
            Our expert Australian team specializes in creating amazing websites
            and cutting-edge software, tailored to meet the unique needs of the
            accommodation industry.
          </p>
          <p className="description">
            We work collaboratively to deliver exceptional digital products that
            not only enhance your business but also set you apart in an
            ever-evolving digital landscape.
          </p>
          <p className="description">
            Your success is our success. <a href="#">Contact us</a> today to
            discuss your project.
          </p>
        </div>

        <div className="floating-container">
          <div className="floating-button">
            <b>+</b>
          </div>
          <div className="element-container">
            <a href="callto:0777777777" className="float-element tooltip-left">
              <i className="material-icons">phone</i>
            </a>
            <a href="mailto:info@luminar.com" className="float-element">
              <i className="material-icons">email</i>
            </a>
            <a href="#" className="float-element">
              <i className="material-icons">chat</i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
