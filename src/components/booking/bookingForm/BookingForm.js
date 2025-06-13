import React, { useState } from "react";
import "./bookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  //Reservation Date State
  // Format today's date to YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // months are 0-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${mm}-${dd}-${yyyy}`;
  };

  // Format date for display like "June 12, 2025"
  const formatDisplayDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };
  /************************************* */

  // Selected time state
  const [selectedTime, setSelectedTime] = useState("17:00");

  // Handler for when a time is selected
  const handleResTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  //Selected date
  const [resDate, setResDate] = React.useState(getTodayDate());
  const handleResDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);

    // Dispatch the new date to update times
    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };

  /*
  const [resDate, setResDate] = useState(getTodayDate());
  const handleResDateChange = (e) => {
    const date = e.target.value;
    setResDate(date);
    /* dispatch({ type: "UPDATE_TIMES", payload: date }); // lift the logic here
  };
  */
  /*************************************************** */

  /*Number of Guests State*/
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const handleNumberOfGuestsChange = (e) => {
    setNumberOfGuests(Number(e.target.value));
  };
  /*Occasion State*/
  const [occasion, setOccasion] = useState("Birthday");
  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("All the forms data");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date: </label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={handleResDateChange}
        required
      />
      <h5>
        Your selected date is:{" "}
        <span style={{ color: "white" }}>{formatDisplayDate(resDate)}</span>
      </h5>

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={selectedTime}
        onChange={handleResTimeChange}
        required
      >
        {availableTimes.map((time, index) => (
          <option id={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      <h5>
        Your selected time is:{" "}
        <span style={{ color: "white" }}>{selectedTime}</span>{" "}
      </h5>

      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
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
      <label htmlFor="occasion">Occasion:</label>
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
