import React from "react";
import heroImage from "../../assets/hero/restauranfood.webp";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-text-container">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Meditarrenean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button className="reserve-btn">Reserve a Table</button>
        </Link>
      </div>

      <div className="hero-image-container">
        <img
          src={heroImage}
          alt="a sample of some of litle lemon deliciuos cousine"
        />
      </div>
    </section>
  );
};

export default Hero;
