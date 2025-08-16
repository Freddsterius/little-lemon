import React, { useState } from "react";
import "./bookingForm.css";

const BookingForm = ({ availableTimes = [], handleDateChange, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [seatingOption, setSeatingOption] = useState("Standard");

  const onDateChange = (e) => {
    const selected = e.target.value;
    setDate(selected);
    handleDateChange(selected);
  };

  return (
    <>
      <form onSubmit={submitForm} className="boooking-form">
        <label htmlFor="res-date" aria-label="Date">
          Choose date:
        </label>
        <input type="date" id="res-date" value={date} onChange={onDateChange} />

        <label htmlFor="res-time" aria-label="Time">
          Choose time:
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests" aria-label="Guests">
          Number of guests:
        </label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion" aria-label="Occasion">
          Occasion:
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Holiday">Holiday</option>
        </select>

        <label>Seating options:</label>
        <div>
          <label htmlFor="standard" aria-label="Standard">
            Standard
            <input
              type="radio"
              id="standard"
              name="seatingOption"
              value="Standard"
              checked={seatingOption === "Standard"}
              onChange={(e) => setSeatingOption(e.target.value)}
            />
          </label>

          <label htmlFor="outside" aria-label="Outside">
            Outside
            <input
              type="radio"
              id="outside"
              name="seatingOption"
              value="Outside"
              checked={seatingOption === "Outside"}
              onChange={(e) => setSeatingOption(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="res-btn" aria-label="Submit Form">
          Make a Reservation
        </button>
      </form>
    </>
  );
};
export default BookingForm;
