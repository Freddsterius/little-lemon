import React from "react";
import { useNavigate } from "react-router-dom";
import "./shippingInfo.css";

const ShippingInfo = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/confirmed");
  };

  return (
    <div className="shipping-info-full-sreen-container">
      <section className="little-lemon">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </section>

      <div className="shipping-info-form-container">
        <h2 className="form-title">Booking Details</h2>
        <form onSubmit={handleSubmit} className="shipping-info-form">
          <div className="shipping-info-form-input-group">
            <select
              placeholder="Date - Time - Number of Dinners"
              aria-label="Date - Time - Number of Dinners"
            >
              <option>Date - Time - Number of Dinners</option>
            </select>
          </div>

          <div className="shipping-info-form-input-group">
            <label htmlFor="name">* First Name/Last Name</label>
            <input
              type="text"
              placeholder="First Name/Last Name..."
              name="name"
              id="name"
              aria-label="Name"
              /*required*/
            />
          </div>

          <div className="shipping-info-form-input-group ">
            <label htmlFor="card-number">* Card Number...</label>
            <input
              type="text"
              placeholder="Card Number"
              name="card-number"
              id="card-number"
              aria-label="Card Number"
              /*required*/
            />

            <div className="card-details">
              <div>
                <label htmlFor="card-exp-date">* Card Expiration Date</label>
                <input
                  type="text"
                  aria-label="MM/YYYY"
                  placeholder="MM/YYYY"
                  name="card-exp-date"
                  id="card-exp-date"
                  /*required*/
                />
              </div>

              <div>
                <label htmlFor="card-cvv">* CVV</label>
                <input
                  type="text"
                  placeholder="CVV"
                  name="card-cvv"
                  id="card-cvv"
                  aria-label="CVV"
                  /*required*/
                />
              </div>
            </div>
          </div>

          <div className="shipping-info-form-input-group">
            <label htmlFor="billing-adrress">* Billing Adrress</label>
            <input
              type="text"
              placeholder="Billing Adrress..."
              id="billing-adrress"
              name="billing-adrress"
              aria-label="Billing Adrress"
              /*required*/
            />
          </div>

          <div className="shipping-info-form-input-group">
            <label htmlFor="billing-adrress">* Country/Region</label>
            <input
              type="text"
              placeholder="Country/Region"
              id="country-region"
              name="country-region"
              aria-label="Country/Region"
              /*required*/
            />
          </div>

          <div className="shipping-info-form-input-group">
            <div className="conf-text">
              <label htmlFor="via-text">
                Send me booking confirmation via text
              </label>
              <input
                type="radio"
                id="via-text"
                name="confirmation-preference"
              />
            </div>

            <div className="conf-email">
              <label htmlFor="via-email">
                Send me booking confirmation via email
              </label>
              <input
                type="radio"
                id="via-email"
                name="confirmation-preference"
                checked
              />
            </div>
          </div>

          <button type="submit" className="book-btn" aria-label="Submit Form">
            Book
          </button>

          <p className="note"> Note: The fields with * are required!</p>
        </form>
      </div>
    </div>
  );
};

export default ShippingInfo;
