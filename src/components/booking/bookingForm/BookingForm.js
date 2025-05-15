import React from "react";

const BookingForm = () => {
  return (
    <form
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
        textAlign: "left",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <label HTMLfor="res-date">Choose date</label>
      <input type="date" id="res-date" />

      <label for="res-time">Choose time</label>
      <select id="res-time ">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label HTMLfor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />

      <label HTMLfor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;
