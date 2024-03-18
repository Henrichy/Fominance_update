import "./About.css"
import React, { useState } from 'react';
import line from "../assets/Line 12.svg"
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You would typically send 'email' to your server here
    console.log('Submitting email:', email);
    // After submitting, clear the input
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
   
    <div className="newsletter">
      <h1 className="news-header">Subscribe to our newsletter</h1>
      <h2 className="news-p">Subscribe to Our Newsletter for Exclusive Updates and Special Offers!</h2>
      <h2 className="news-p2">Lets keep You Informed and Inspired Every Step of the Way</h2>
    <div className="wrapper">
      <div className="input-wrapper">
        <input type="text" placeholder="Email Address" className="txt-input"/>
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
    </div>
   
  );
};

export default NewsletterSignup;
