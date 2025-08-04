import React from "react";
import Nav from "../nav/Nav";
import logo from "../../assets/header/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="little lemon logo" />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
