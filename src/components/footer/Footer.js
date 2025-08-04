import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/hero/restauranfood.webp";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-logo-container">
          <img src={footerLogo} alt="little lemon logo" />
        </div>

        <nav className="doormat-nav-container">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/" className="doormat-nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/hero" className="doormat-nav-link">
                Hero
              </Link>
            </li>
            <li>
              <Link to="/highlights" className="doormat-nav-link">
                Highlights
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="doormat-nav-link">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/about" className="doormat-nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="contact-container">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Phone Number</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </div>

        <div className="social-media-container">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.x.com" target="_blank" rel="noreferrer">
                Twiter/X
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
