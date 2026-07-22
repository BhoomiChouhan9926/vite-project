import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>MemoryNest ❤️</h2>
          <p>
            Preserve your precious memories forever with beautiful digital
            scrapbooks.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">About</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>support@memorynest.com</p>
          <p>India</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MemoryNest. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;