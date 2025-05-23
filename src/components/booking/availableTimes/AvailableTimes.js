import React, { useState } from "react";
import "./availableTimes.css";

const AvailableTimes = (props) => {
  // Reservation time state (optional if you manage all time selection through dispatch)
  const [selectedTime, setSelectedTime] = useState("17:00");

  const handleResTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  return (
    <div className="available-times">
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={selectedTime}
        onChange={handleResTimeChange}
        required
      >
        {props.availableTimes.map((time, index) => (
          <option id={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      <h5>
        Your selected time is:{" "}
        <span style={{ color: "white" }}>{selectedTime}</span>{" "}
      </h5>
    </div>
  );
};

export default AvailableTimes;
