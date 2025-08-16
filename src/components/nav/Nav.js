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
        aria-label="Open Home"
      >
        Home
      </NavLink>

      <NavLink
        to="/highlights"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
        aria-label="Open Highlights"
      >
        Highlights
      </NavLink>

      <NavLink
        to="/testimonials"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
        aria-label="Open Testimonials"
      >
        Testimonials
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
        aria-label="Open About"
      >
        About
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
        aria-label="Open Menu"
      >
        Menu
      </NavLink>

      <NavLink
        to="/booking"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
        aria-label="Open Reservation"
      >
        Reservations
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
        aria-label="Open Login"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Nav;
