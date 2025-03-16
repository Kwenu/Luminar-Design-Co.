import React from "react";
import "./Services.css";
import Ser1 from "./IMG3.jpg";
import Ser2 from "./IMG4.jpeg";
import Ser3 from "./IMG5.jpeg";
import Ser4 from "./IMG6.jpeg";
import Ser5 from "./IMG7.jpeg";
import Ser6 from "./IMG8.jpeg";
import Ser7 from "./IMG9.jpeg";
import Ser8 from "./IMG11.jpeg";

const Services = () => {
  return (
    <section className="services fade-in" id="services">
      <div className="service-container">
        <div className="st-line"></div>
        <p className="sub-title1">Our Services</p>
        <div className="st-line1"></div>
        <h2 className="title1">Web Design & Development</h2>
      </div><br /><br />
      <section class="articles fade-in">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={Ser1} alt="" />
            </figure>
            <div class="article-body">
              <h2>Custom Web Design</h2>
              <p>
              Our Custom Web Design service is dedicated to crafting websites 
              that are as unique as your business. We focus on creating visually 
              stunning, highly functional websites that not only represent your 
              brand but also provide an exceptional user experience.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={Ser2} alt="" />
            </figure>
            <div class="article-body">
              <h2>User-Centric Development</h2>
              <p>
              Our User-Centric Development service focuses on creating websites and 
              digital experiences that prioritize the needs, behaviors, and 
              preferences of your users. We believe that a successful website is 
              one that not only looks great but also provides an intuitive and 
              seamless experience for every visitor.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={Ser3} alt="" />
            </figure>
            <div class="article-body">
              <h2>Conversion Optimised</h2>
              <p>
              Our conversion optimized service is designed to turn your website visitors 
              into loyal customers. By focusing on key elements that infl uence user 
              behavior, we create digital experiences that not only attract traffi c but 
              also encourage users to take meaningful actions, whether it’s making a 
              purchase, signing up for a newsletter, or fi lling out a contact form.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={Ser4} alt="" />
            </figure>
            <div class="article-body">
              <h2>Ongoing Support & Managed Hosting</h2>
              <p>
              Our ongoing support and managed hosting service is designed to ensure 
              your website operates smoothly, securely, and effi ciently long after its 
              launch. We off er comprehensive support and hosting solutions that take 
              the stress out of managing your digital presence, so you can focus on 
              growing your business.
              </p>
            </div>
          </div>
        </article>
      </section><br /><br /><br />

      <h2 className="title1 fade-in">Optimised Hosting Package</h2><br /><br />
      <section class="articles fade-in">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={Ser5} alt="" />
            </figure>
            <div class="article-body">
              <h2>Fully Managed Hosting Service</h2>
              <p>
              Luminar Design Co. off ers a Fully Managed Hosting service that takes 
              the complexity out of maintaining your website’s infrastructure, 
              providing a seamless, secure, and high-performance hosting solution 
              tailored to your business needs. Our managed hosting allows you to 
              focus on your core business while we handle all the technical 
              aspects of keeping your site up and running.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={Ser6} alt="" />
            </figure>
            <div class="article-body">
              <h2>Fast and Secure Australian Servers</h2>
              <p>
              Our Fast and Secure Australian Servers service is designed to 
              provide your website with top-notch performance and security, 
              all hosted on servers located within Australia. This 
              service ensures that your site delivers a superior user 
              experience to your local audience while adhering to 
              Australian data sovereignty regulations.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={Ser7} alt="" />
            </figure>
            <div class="article-body">
              <h2>Scalable Storage Solutions</h2>
              <p>
              Our conversion optimized service is designed to turn your 
              website visitors into loyal customers. By focusing on key 
              elements that infl uence user behavior, we create digital 
              experiences that not only attract traffi c but also 
              encourage users to take meaningful actions, whether it’s 
              making a purchase, signing up for a newsletter, or fi lling 
              out a contact form.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={Ser8} alt="" />
            </figure>
            <div class="article-body">
              <h2>Comprehensive Support</h2>
              <p>
              Optimised Hosting Package for a reliable, secure, and 
              high-performance hosting solution that gives you peace of 
              mind and allows you to focus on what you do best.
              </p>
            </div>
          </div>
        </article><br /><br />
      </section>
    </section>
  );
};

export default Services;
