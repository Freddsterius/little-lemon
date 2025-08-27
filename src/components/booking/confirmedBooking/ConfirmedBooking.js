import React from "react";
import { useNavigate } from "react-router-dom";
import "./confirmedBooking.css";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="confirmed-container">
      <section className="last-little-lemon">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </section>

      <div className="confirmation-text-container">
        <h2>Success!</h2>
        <p>
          Congratulation, USER! You successfully booked a table at{" "}
          <em>LITTLE LEMON</em>. Please check your inbox/email for the booking
          confirmation details.
        </p>
        <p>Thank you for choosing us!</p>
      </div>

      <button type="submit" onClick={handleClick} className="back-btn">
        Go Back to HOME
      </button>
    </div>
  );
};

export default ConfirmedBooking;
