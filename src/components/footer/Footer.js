import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div>
          <img src={footerLogo} alt="little lemon logo" />
        </div>
        <div>
          <h3>Doormat Navigation</h3>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hero">Hero</Link>
              </li>
              <li>
                <Link to="/highlights">Highlights</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h3>Contact</h3>
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

        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twiter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
/*
// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // optional: for styling

function Footer() {
  return (
    <footer className="doormat-footer">
      <div className="footer-container">
        <section className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </section>

        <section className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/catering">Catering</Link></li>
          </ul>
        </section>

        <section className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </section>

        <section className="footer-section">
          <h4>Social</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;

*************************CSS***********************
.doormat-footer {
  background-color: #222;
  color: #fff;
  padding: 40px 20px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1 1 200px;
  margin: 10px;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 16px;
  border-bottom: 1px solid #555;
  padding-bottom: 5px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
}

.footer-section a:hover {
  color: #fff;
}

*/
