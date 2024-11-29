import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div id="contact-container">
      <div id="header">
        <div className="part">
          <div className="left"><i className="fa-solid fa-droplet"></i></div>
          <div className="left">TokenUp</div>
        </div>
        <div className="part">
            <div className="right"><Link to="/">Home</Link></div>
            <div className="right"><Link to="/about">About</Link></div>
            <div className="right"><Link to="/products">Products</Link></div>
            <div className="right"><Link to="/contact">Contact</Link></div>
            <div className="right"><button><Link to="/login">Login</Link></button></div>
          </div>
      </div>
      
      <div id="contact-section">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us by filling the form below:</p>
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input type="tel" id="contact" name="contact" placeholder="Enter your contact number" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
