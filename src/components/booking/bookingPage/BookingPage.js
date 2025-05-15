import React from "react";
import BookingForm from "../bookingForm/BookingForm";
import photo1 from "../../../assets/images/yellowbg.jpg";
import photo2 from "../../../assets/images/bluebg.jpg";

const BookingPage = () => {
  return (
    <div style={{ backgroundColor: "green", margin: "15px" }}>
      <h2>Little Lemon</h2>
      <h2>Chicago</h2>
      <div className="any-occasion">
        <h3>Find a table for any occasion</h3>
        <img src={photo1} alt="" width={100} />
        <img src={photo2} alt="" width={100} />
      </div>

      <BookingForm />

      <div className="seating-option">
        <h3>Seating option</h3>
        <label>
          Standard
          <input type="radio" id="standard" name="seating-preference" />
        </label>
        <label>
          Outside
          <input type="radio" id="outside" name="seating-preference" />
        </label>
      </div>
    </div>
  );
};

export default BookingPage;
