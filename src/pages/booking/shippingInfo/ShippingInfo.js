import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shippingInfo.css";

const ShippingInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    cardExpDate: "",
    cardCvv: "",
    billingAdrress: "",
    countryRegion: "",
  });

  const [confirm, setConfirm] = useState(true);
  const handleConfirm = (event) => {
    setConfirm(event.target.checked);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/confirmed");
  };

  return (
    <div className="shipping-info-full-screen-container">
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
              value={formData.name}
              onChange={handleChange}
              id="name"
              aria-label="Name"
              /*required*/
            />
            <p>You typed: {formData.name}</p>
            {formData.name == "" && (
              <p style={{ color: "red" }}>⚠️ Name is required!</p>
            )}
          </div>

          <div className="shipping-info-form-input-group ">
            <label htmlFor="card-number">* Card Number</label>
            <input
              type="text"
              placeholder="Card Number..."
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              id="card-number"
              aria-label="Card Number"
              /*required*/
            />
            <p>You typed: {formData.cardNumber}</p>
            {formData.cardNumber == "" && (
              <p style={{ color: "red" }}>⚠️ Card Number is required!</p>
            )}

            <div className="card-details">
              <div>
                <label htmlFor="card-exp-date">* Card Exp. Date</label>
                <input
                  type="text"
                  aria-label="MM/YYYY"
                  placeholder="MM/YYYY"
                  name="cardExpDate"
                  value={formData.cardExpDate}
                  onChange={handleChange}
                  id="card-exp-date"
                  /*required*/
                />
                <p>You typed: {formData.cardExpDate}</p>
                {formData.cardExpDate == "" && (
                  <p style={{ color: "red" }}>⚠️ Card Exp. Date is required!</p>
                )}
              </div>

              <div>
                <label htmlFor="card-cvv">* CVV</label>
                <input
                  type="text"
                  placeholder="CVV"
                  name="cardCvv"
                  value={formData.cardCvv}
                  onChange={handleChange}
                  id="card-cvv"
                  aria-label="CVV"
                  /*required*/
                />
                <p>You typed: {formData.cardCvv}</p>
                {formData.cardCvv == "" && (
                  <p style={{ color: "red" }}>⚠️ CVV is required!</p>
                )}
              </div>
            </div>
          </div>

          <div className="shipping-info-form-input-group">
            <label htmlFor="billing-adrress">* Billing Adrress</label>
            <input
              type="text"
              placeholder="Billing Adrress..."
              id="billing-adrress"
              name="billingAdrress"
              value={formData.billingAdrress}
              onChange={handleChange}
              aria-label="Billing Adrress"
              /*required*/
            />
            <p>You typed: {formData.billingAdrress}</p>
            {formData.billingAdrress == "" && (
              <p style={{ color: "red" }}>⚠️ Billing Adrress is required!</p>
            )}
          </div>

          <div className="shipping-info-form-input-group">
            <label htmlFor="billing-adrress">* Country/Region</label>
            <input
              type="text"
              placeholder="Country/Region"
              id="country-region"
              name="countryRegion"
              value={formData.countryRegion}
              onChange={handleChange}
              aria-label="Country/Region"
              /*required*/
            />
            <p>You typed: {formData.countryRegion}</p>
            {formData.countryRegion == "" && (
              <p style={{ color: "red" }}>⚠️ Country/Region is required!</p>
            )}
          </div>

          <div className="shipping-info-form-input-group">
            <div className="conf-email">
              <input
                type="checkbox"
                id="via-email"
                name="confirmationPreference"
                value="viaEmail"
                checked={confirm}
                onChange={handleConfirm}
              />
              <label htmlFor="via-email">
                Send me booking confirmation via email
              </label>
            </div>

            <h5>You do {confirm ? "AGRRE" : "NOT AGRRE."} to this.</h5>
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
