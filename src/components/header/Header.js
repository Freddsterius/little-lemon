import React from "react";
import Nav from "../nav/Nav";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div class="website-logo">
        <img src={logo} alt="little lemon logo"></img>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
