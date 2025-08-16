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
        <div>
          <select
            placeholder="Date - Time - Number of Dinners"
            aria-label="Date - Time - Number of Dinners"
          >
            <option>Date - Time - Number of Dinners</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="* First Name/Last Name"
            aria-label="Name"
            required
          />
          <small>Name is required</small>
        </div>

        <div className="card">
          <input
            type="text"
            placeholder="* Card Number"
            aria-label="Card Number"
            required
          />
          <small>Card number is required</small>
          <div className="card-details">
            <div>
              <input
                type="text"
                placeholder="* MM/YYYY"
                aria-label="MM/YYYY"
                required
              />
              <p>MM/YYYY is required</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="* CVV"
                aria-label="CVV"
                required
              />
              <p>CVV is required</p>
            </div>
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="* Billing Adrress"
            aria-label="Billing Adrress"
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="* Country/Region"
            aria-label="Country/Region"
            required
          />
          <small>Country/Region is required</small>
        </div>

        <div>
          <label>
            Send me booking confirmation via text
            <input type="radio" />
          </label>
          <label>
            Send me booking confirmation via email
            <input type="radio" />
          </label>
        </div>

        <button
          type="submit"
          onClick={handleClick}
          className="book-btn"
          aria-label="Submit Form"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default ShippingInfo;
