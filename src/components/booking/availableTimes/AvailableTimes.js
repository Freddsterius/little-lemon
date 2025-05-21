import React from "react";
import "./availableTimes.css";

const AvailableTimes = (props) => {
  return (
    <div className="available-times">
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={props.selectedTime}
        onChange={props.handleResTimeChange}
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
        <span style={{ color: "white" }}>{props.selectedTime}</span>{" "}
      </h5>
    </div>
  );
};

export default AvailableTimes;
