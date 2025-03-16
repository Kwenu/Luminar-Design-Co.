import React, { useState } from "react";
import "./ContactUs.css";
import {
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Email Format
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Check for missing fields
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    // Load environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Debugging logs
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    if (!serviceId || !templateId || !publicKey) {
      setError("Missing EmailJS credentials. Check .env file.");
      setLoading(false);
      return;
    }

    const emailParams = {
      name: formData.name,
      email: formData.email,    
      message: formData.message
    };

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSuccess("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setError("Failed to send the message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact-container fade-in" id="contact">
      <div className="contact-box">
        {/* Contact Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contact-input textarea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <button className="contact-btn-2" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="st-line-con"></div>
          <p className="query-text">
            <em>Have any query?</em>
          </p>
          <h2 className="contact-title">CONTACT US</h2>
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Social Icons */}
          <div className="social-icon2">
            <FaFacebook className="icon" />
            <FaLinkedin className="icon" />
            <FaXTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
