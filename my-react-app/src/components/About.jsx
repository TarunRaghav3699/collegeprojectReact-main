import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div id="container1">
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
        <div id="about-section">
          <h1>About TokenUp</h1>
          <p>
            <strong>Introduction to TokenUp:</strong><br />
            • Project Name: TokenUp.<br />
            • Purpose: A gamified learning platform rewarding students with tokens for academic achievements.<br />
            • Problem Statement: Traditional education systems often fail to motivate students. TokenUp aims to enhance engagement by making learning rewarding and fun.<br />
          </p>
          <p>
            <strong>Key Features of TokenUp:</strong><br />
            • Automated Token Distribution: Tokens are awarded based on performance, attendance, and participation.<br />
            • Leaderboards: Real-time rankings create healthy competition among students.<br />
            • Analytics: Detailed progress data helps teachers and administrators make informed decisions.<br />
            • Real-Time Updates: Keeps token balances and rankings current.<br />
          </p>
          <p>
            <strong>Blockchain Integration:</strong><br />
            • Why Blockchain?: Ensures security and transparency in token distribution, preventing manipulation.<br />
            • Solidity Smart Contracts: Automates token distribution when specific criteria are met, like passing exams.<br />
            • Web3 Integration: Allows seamless interaction with the Ethereum blockchain.<br />
          </p>
          <p>
            <strong>Tech Stack:</strong><br />
            • Frontend: React.js for an interactive user experience.<br />
            • Backend: Node.js and MongoDB for robust data handling.<br />
            • Blockchain: Solidity smart contracts and Web3.js for token management on the Ethereum network.<br />
          </p>
          <p>
            <strong>Future Goals for TokenUp:</strong><br />
            • Integration with Academia: Plans to integrate TokenUp into our university's app for seamless tracking.<br />
            • Expansion: Extend to other universities and introduce reward marketplaces for real-world benefits like discounts on books or events.<br />
          </p>
          <p>
            <strong>Conclusion:</strong><br />
            TokenUp motivates students by rewarding their academic efforts, making learning engaging and rewarding. With blockchain, we ensure secure, transparent token management, creating a scalable solution for educational institutions.<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
