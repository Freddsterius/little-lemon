import React, { useState } from "react";
import "./bookingForm.css";
import AvailableTimes from "../availableTimes/AvailableTimes";

const BookingForm = ({
  availableTimes,
  selectedTime,
  handleResTimeChange,
  dispatch,
}) => {
  /*Reservation Date State*/
  const [resDate, setResDate] = useState("");
  const handleResDateChange = (e) => {
    const date = e.target.value;
    setResDate(date);
    dispatch({ type: "UPDATE_TIMES", payload: date }); // lift the logic here
  };

  /*Number of Guests State*/
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const handleNumberOfGuestsChange = (e) => {
    setNumberOfGuests(Number(e.target.value)); // value is a number
  };
  /*Occasion State*/
  const [occasion, setOccasion] = useState("Birthday");
  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={handleResDateChange}
        required
      />
      <h5>
        Your selected date is:{" "}
        <span style={{ color: "white" }}>{resDate || "None"}</span>
      </h5>
      <AvailableTimes
        availableTimes={availableTimes}
        selectedTime={selectedTime}
        handleResTimeChange={handleResTimeChange}
        dispatch={dispatch}
      />
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleNumberOfGuestsChange}
        required
      />
      <h5>
        You'll be having{" "}
        <span style={{ color: "white" }}>{numberOfGuests}</span> guests.
      </h5>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <h5>
        Your selected occasion is:{" "}
        <span style={{ color: "white" }}>{occasion}</span>
      </h5>
    </form>
  );
};

export default BookingForm;
