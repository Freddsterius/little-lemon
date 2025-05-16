import React from "react";
import heroImage from "../../assets/images/restauranfood.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <section class="hero">
      <div class="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned
          <br />
          Meditarrenean restaurant,
          <br />
          focused on traditional
          <br />
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div class="hero-img">
        <img
          src={heroImage}
          alt="a sample of some of litle lemon deliciuos food"
        />
      </div>
    </section>
  );
};

export default Hero;
