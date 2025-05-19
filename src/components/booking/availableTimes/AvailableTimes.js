import React, { useState } from "react";
import "./availableTimes.css";

const AvailableTimes = () => {
  const [availableTime, setAvailableTime] = useState("17:00");
  const handleChange = (e) => {
    setAvailableTime(e.target.value); // This will be a string
  };
  return (
    <div className="available-times">
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={availableTime}
        onChange={handleChange}
        required
      >
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      <h5>
        Your selected time is:{" "}
        <span style={{ color: "white" }}>{availableTime}</span>{" "}
      </h5>
    </div>
  );
};

export default AvailableTimes;
