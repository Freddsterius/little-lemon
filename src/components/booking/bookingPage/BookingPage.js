import React from "react";
import BookingForm from "../bookingForm/BookingForm";
import photo1 from "../../../assets/images/yellowbg.jpg";
import photo2 from "../../../assets/images/bluebg.jpg";
import "./bookingPage.css";

const BookingPage = () => {
  return (
    <div className="booking-page">
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

      <BookingForm />

      <section className="seating-option">
        <h3>Seating option</h3>
        <label>
          Standard
          <input type="radio" id="standard" name="seating-preference" />
        </label>
        <label>
          Outside
          <input type="radio" id="outside" name="seating-preference" />
        </label>
      </section>
    </div>
  );
};

export default BookingPage;
