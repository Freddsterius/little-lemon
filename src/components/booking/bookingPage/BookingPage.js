import React from "react";
import BookingForm from "../bookingForm/BookingForm";
import photo1 from "../../../assets/booking/restaurant-chef-B.webp";
import photo2 from "../../../assets/booking/restaurant.webp";
import "./bookingPage.css";

const BookingPage = ({
  availableTimes = { availableTimes },
  dispatch = { dispatch },
}) => {
  return (
    <div className="booking-page">
      <div className="native-content-container">
        <section className="little-lemon">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </section>

        <section className="any-occasion">
          <h3>Find a table for any occasion</h3>

          <div className="any-occasion-images">
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
          </div>
        </section>
      </div>

      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;
