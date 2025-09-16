import React from "react";
import "./card.css";
import greekSalad from "./../../assets/highlights/greek-salad-50.webp";
import deliveryIcon from "./../../assets/icons/delivery.jpg";

const Card = ({ image, name, price, description }) => {
  return (
    <div className="m-dish-card">
      <img src={image} alt={name} />
      <div className="dish-price-container">
        <p className="dish-name">{name}</p> <p className="price">{price}</p>
      </div>
      <p className="dish-description">{description}</p>
      <button className="delivery-btn">
        Order a delivery <img src={deliveryIcon} />
      </button>
    </div>
  );
};

export default Card;
