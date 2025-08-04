import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar-container">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/highlights"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
      >
        Highlights
      </NavLink>
      <NavLink
        to="/testimonials"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
      >
        Testimonials
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/booking"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
      >
        Reservations
      </NavLink>
    </nav>
  );
};

export default Nav;
