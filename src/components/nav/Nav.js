import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/booking">Booking Page</Link>
      <ul>
        <li style={{ color: "red" }}>Edit the navbar</li>
      </ul>
    </nav>
  );
};

export default Nav;
