import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/highlights">Highlights</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/about">About</Link>
      <Link to="/booking">Reservations</Link>
    </nav>
  );
};

export default Nav;
