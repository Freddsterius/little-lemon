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
    <div className="all-container">
      <section className="last-little-lemon">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      </section>
      <div className="text-container">
        <h2>Success!</h2>
        <p>
          Congratulation, <strong>user</strong>!<br />
          You successfully booked a table at <em>LITTLE LEMON</em>.
        </p>
        <p>Check your inbox/email for the booking Confirmation details.</p>
        <p>Thank you for choosing us!</p>
      </div>
      <button type="submit" onClick={handleClick} className="back-btn">
        Go Back to HOME
      </button>
    </div>
  );
};

export default ConfirmedBooking;
