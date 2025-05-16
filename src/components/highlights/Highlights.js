import React from "react";
import greekSalad from "../../assets/images/greek salad.jpg";
import bruchetta from "../../assets/images/bruchetta.svg";
import lemeonDessert from "../../assets/images/lemon dessert.jpg";
import "./highlights.css";

const Highlights = () => {
  return (
    <section class="specials">
      <div class="title-and-button">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div class="dish-cards">
        <div class="dish-card">
          <img src={greekSalad} alt="a delicious greek salad" />
          <p class="card-name-price">
            <span class="dish-name">Greek Salad </span>{" "}
            <span class="price">$12.99</span>
          </p>
          <p class="dish-description">
            The famous Greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and rosemay
            croutons.{" "}
          </p>
          <p class="delivery-text">Order a delivery 🚘</p>
        </div>
        <div class="dish-card">
          <img src={bruchetta} alt="a delicious bruschetta" />
          <p class="card-name-price">
            <span class="dish-name">Bruschetta</span>{" "}
            <span class="price">$5.99</span>
          </p>
          <p class="dish-description">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <p class="delivery-text">Order a delivery 🚘</p>
        </div>
        <div class="dish-card">
          <img src={lemeonDessert} alt="a delicious lemon dessert" />
          <p class="card-name-price">
            <span class="dish-name">Lemon Dessert</span>{" "}
            <span class="price">$5.00</span>
          </p>
          <p class="dish-description">
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <p class="delivery-text">Order a delivery 🚘</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
