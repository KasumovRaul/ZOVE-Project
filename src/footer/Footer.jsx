import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
<footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h4>HELP</h4>
      <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Payment</a></li>
        <li><a href="#">Returns</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>COMPANY</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Offices</a></li>
        <li><a href="#">Sustainability</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>FOLLOW US</h4>
      <ul className="social-links">
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">YouTube</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>NEWSLETTER</h4>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 Z O V Ǝ. All rights reserved.</p>
  </div>
</footer>

    </>
  )
}

export default Footer