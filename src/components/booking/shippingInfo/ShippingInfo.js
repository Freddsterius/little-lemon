import React from "react";
import { useNavigate } from "react-router-dom";
import "./shippingInfo.css";

const ShippingInfo = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/confirmed");
  };

  return (
    <div className="master-container">
      <section className="little-lemon">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </section>

      <form className="shipping-info-form">
        <h2 className="form-title">Booking Details</h2>
        <input type="text" placeholder="Date - Time - Number of Dinners" />
        <input type="text" placeholder="First Name/Last Name" />
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="MM/YYYY" />
        <input type="text" placeholder="CVV" />
        <input type="text" placeholder="Billing Adrress" />
        <input type="text" placeholder="Country/Region" />
        <label>
          Send me booking confirmatio via text
          <input type="radio" />
        </label>
        <label>
          Send me booking confirmation via email
          <input type="radio" />
        </label>
        <button type="submit" onClick={handleClick} className="book-btn">
          Book
        </button>
      </form>
    </div>
  );
};

export default ShippingInfo;
