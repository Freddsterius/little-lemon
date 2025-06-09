import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/highlights" className="navbar-link">
        Highlights
      </Link>
      <Link to="/testimonials" className="navbar-link">
        Testimonials
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/booking" className="navbar-link">
        Reservations
      </Link>
    </nav>
  );
};

export default Nav;
