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
          <select placeholder="Date - Time - Number of Dinners">
            <option>Date - Time - Number of Dinners</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="* First Name/Last Name"
            className="name-field"
            required
          />
          <p>Name is required</p>
        </div>

        <div className="card">
          <input type="text" placeholder="* Card Number" required />
          <p>Card number is required</p>
          <div className="card-details">
            <div>
              <input
                type="text"
                placeholder="* MM/YYYY"
                className="mm"
                required
              />
              <p>MM/YYYY is required</p>
            </div>
            <div>
              <input type="text" placeholder="* CVV" required />
              <p>CVV is required</p>
            </div>
          </div>
        </div>

        <div>
          <input type="text" placeholder="* Billing Adrress" required />
        </div>

        <div>
          <input type="text" placeholder="* Country/Region" required />
          <p>Country/Region is required</p>
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

        <button type="submit" onClick={handleClick} className="book-btn">
          Book
        </button>
      </form>
    </div>
  );
};

export default ShippingInfo;
