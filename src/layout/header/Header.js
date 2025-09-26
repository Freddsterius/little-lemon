import React from "react";
import Nav from "../nav/Nav";
import logo from "../../assets/header/logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="little lemon logo" />
        </Link>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
