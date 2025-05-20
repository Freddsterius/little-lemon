import React from "react";
import "./availableTimes.css";

const AvailableTimes = (props) => {
  return (
    <div className="available-times">
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={props.resTime}
        onChange={props.handleResTimeChange}
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
        <span style={{ color: "white" }}>{props.resTime}</span>{" "}
      </h5>
    </div>
  );
};

export default AvailableTimes;
