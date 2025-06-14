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

  /*Seating Options state */
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
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
        {Array.isArray(availableTimes) &&
          availableTimes.map((time, index) => (
            <option key={index} value={time}>
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

      <label>Seating options</label>

      <section className="radio-option">
        <label htmlFor="standard">Standard</label>
        <input
          type="radio"
          id="standard"
          name="seating-preference"
          value="Standard"
          checked={selectedOption === "Standard"}
          onChange={handleChange}
        />
      </section>

      <section className="radio-option">
        <label htmlFor="outside">Outside</label>
        <input
          type="radio"
          id="outside"
          name="seating-preference"
          value="Outside"
          checked={selectedOption === "Outside"}
          onChange={handleChange}
        />
      </section>

      <h5>
        Your selected seating preference is:{" "}
        <span style={{ color: "white" }}>{selectedOption}</span>
      </h5>

      <div className="letsgo-btn-container">
        <button id="letsgo-btn">Lets go➡</button>
      </div>
    </form>
  );
};

export default BookingForm;

/*
// BookingForm.js
import React, { useState } from 'react';

function BookingForm({ selectedDate, onDateChange, availableTimes }) {
  // Local state for the rest of the form fields
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { date: selectedDate, time, guests, occasion });
    // ...additional submission logic...
  };

  // Call the handler from Main on date change
  const handleDateInput = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateInput}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;

*/
