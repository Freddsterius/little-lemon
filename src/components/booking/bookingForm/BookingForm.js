import React, { useState } from "react";
import "./bookingForm.css";
import AvailableTimes from "../availableTimes/AvailableTimes";

const BookingForm = () => {
  const [resDate, setResDate] = useState("");
  const handleResDateChange = (e) => {
    setResDate(e.target.value);
  };
  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const handleChange2 = (e) => {
    setNumberOfGuests(Number(e.target.value)); // value is a number
  };
  const [occasion, setOccasion] = useState("Birthday");
  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };
  return (
    <form>
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
      <AvailableTimes />
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleChange2}
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
      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;
