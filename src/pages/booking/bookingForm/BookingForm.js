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
    <div className="boooking-form-container">
      <h3>Book a table</h3>
      <form onSubmit={submitForm} className="boooking-form">
        <div className="boooking-form-input-group">
          <label htmlFor="res-date" aria-label="Date">
            Choose date:
          </label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={onDateChange}
          />
        </div>

        <div className="boooking-form-input-group">
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
        </div>

        <div className="boooking-form-input-group">
          {" "}
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
        </div>

        <div className="boooking-form-input-group">
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
        </div>

        <div className="boooking-form-input-group">
          <label className="options-label">Seating options:</label>

          <div className="standard">
            <label htmlFor="standard" aria-label="Standard">
              Standard
            </label>
            <input
              type="radio"
              id="standard"
              name="seatingOption"
              value="Standard"
              checked={seatingOption === "Standard"}
              onChange={(e) => setSeatingOption(e.target.value)}
            />
          </div>

          <div className="outside">
            <label htmlFor="outside" aria-label="Outside">
              Outside
            </label>
            <input
              type="radio"
              id="outside"
              name="seatingOption"
              value="Outside"
              checked={seatingOption === "Outside"}
              onChange={(e) => setSeatingOption(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="res-btn" aria-label="Submit Form">
          Make a Reservation
        </button>
      </form>
    </div>
  );
};
export default BookingForm;
