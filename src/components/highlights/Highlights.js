import React from "react";
import { Link } from "react-router-dom";
import greekSalad from "../../assets/highlights/greek-salad-50.webp";
import bruchetta from "../../assets/highlights/bruschetta-50.webp";
import lemeonDessert from "../../assets/highlights/lemon-dessert.jpg";
import "./highlights.css";

import Card from "../cards/Card";

const dish = [
  {
    image: greekSalad,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemay croutons.",
  },
  {
    image: bruchetta,
    name: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: lemeonDessert,
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Highlights = () => {
  return (
    <section className="specials-container">
      <div className="title-button-container">
        <h2>This weeks specials!</h2>
        <Link to="/menu">
          <button aria-label="Open Menu">Online Menu</button>
        </Link>
      </div>

      <div className="dish-cards-container">
        <div className="dish-cards-container">
          {dish.map((dish) => (
            <Card
              key={dish.name}
              image={dish.image}
              name={dish.name}
              price={dish.price}
              description={dish.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

/*
const Highlights = () => {
  return (
    <section className="specials-container">
      <div className="title-button-container">
        <h2>This weeks specials!</h2>
        <Link to="/menu">
          <button aria-label="Open Menu">Online Menu</button>
        </Link>
      </div>

      <div className="dish-cards-container">

        <div className="dish-card">
          <img src={greekSalad} alt="a delicious greek salad" />
          <div className="dish-price-container">
            <p className="dish-name">Greek Salad</p>

            <p className="price">$12.99</p>
          </div>
          <p className="dish-description">
            The famous Greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and rosemay
            croutons.
          </p>
          <button className="delivery-btn">
            Order a delivery <img src={deliveryIcon} />
          </button>
        </div>

        <div className="dish-card">
          <img src={bruchetta} alt="a delicious bruschetta" />
          <div className="dish-price-container">
            <p className="dish-name">Bruschetta</p>{" "}
            <p className="price">$5.99</p>
          </div>
          <p className="dish-description">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <button className="delivery-btn">
            Order a delivery <img src={deliveryIcon} />
          </button>
        </div>

        <div className="dish-card">
          <img src={lemeonDessert} alt="a delicious lemon dessert" />
          <div className="dish-price-container">
            <p className="dish-name">Lemon Dessert</p>{" "}
            <p className="price">$5.00</p>
          </div>
          <p className="dish-description">
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button className="delivery-btn">
            Order a delivery <img src={deliveryIcon} />
          </button>
        </div>

        <Card />
      </div>
    </section>
  );
};

export default Highlights;
*/
