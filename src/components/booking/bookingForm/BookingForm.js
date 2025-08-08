import React, { useState } from "react";
//import "./bookingForm.css";

const BookingForm = ({ availableTimes = [], handleDateChange }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [seatingOption, setSeatingOption] = useState("Standard");

  const onDateChange = (e) => {
    const selected = e.target.value;
    setDate(selected);
    // Propagates the change up to `Main` via the handler
    handleDateChange(selected);
  };

  // Form Data submition handler function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //Submit logic — can send booking object to API or state
    //console.log({ date, time, guests, occasion });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="res-date">Choose date:</label>
        <input type="date" id="res-date" value={date} onChange={onDateChange} />
        <p>
          Selected:
          <span style={{ color: "yellow" }}>{date}</span>
        </p>
        <label htmlFor="res-time">Choose time:</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {/* Render availableTimes from props */}
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <p>
          Selected:
          <span style={{ color: "yellow" }}>{time}</span>
        </p>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <p>
          Selected:
          <span style={{ color: "yellow" }}>{guests}</span>
        </p>
        <label htmlFor="occasion">Occasion:</label>
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
        <p>
          Selected:
          <span style={{ color: "yellow" }}>{occasion}</span>
        </p>

        <label>Seating options:</label>
        <label htmlFor="standard">
          Standrd
          <input
            type="radio"
            id="standard"
            name="seatingOption"
            value="Standard"
            checked={seatingOption === "Standard"}
            onChange={(e) => setSeatingOption(e.target.value)}
          />
        </label>
        <label htmlFor="outside">
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
        <p>
          Selected:
          <span style={{ color: "yellow" }}>{seatingOption}</span>
        </p>

        <button type="submit">Make a Reservation</button>
      </form>
    </>
  );
};
export default BookingForm;

/*
reserved code 2:

import React, { useState } from "react";
import "./bookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  // 💀Reservation Date State💀

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

  //Selected date
  const [resDate, setResDate] = React.useState(getTodayDate());
  const handleResDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);

    // Dispatch the new date to update times
    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };

  // 💀Selected time state💀
  const [selectedTime, setSelectedTime] = useState("17:00");

  // Handler for when a time is selected
  const handleResTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // form's initial state declaration
  const [formData, setformData] = useState({
    numberOfGuests: 1,
    occasion: "Birthday",
    seatingPreference: "",
  });

  // single event handler

  const handleChange = (event) => {
    setformData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };


  // Alternative single event handler

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setformData((prevState) => ({ ...prevState, [name]: value }));
  // };


  // form submition handler
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("All the forms data");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date: </label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          onChange={handleResDateChange}
          requiyellow
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
          requiyellow
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
          name="numberOfGuests"
          min="1"
          max="10"
          id="guests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          requiyellow
        />
        {formData.numberOfGuests > 10 && (
          <p style={{ color: "yellow" }}>
            ⚠Warning: Our maximum capacity for number of guests is 10.
          </p>
        )}
        <h5>
          You'll be having{" "}
          <span style={{ color: "white" }}>{formData.numberOfGuests}</span>{" "}
          guests.
        </h5>

        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          requiyellow
        >
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <h5>
          Your selected occasion is:{" "}
          <span style={{ color: "white" }}>{formData.occasion}</span>
        </h5>

        <label>Seating options</label>

        <section className="radio-option">
          <label htmlFor="standard">Standard</label>
          <input
            type="radio"
            id="standard"
            name="seatingPreference"
            value="Standard"
            checked={formData.seatingPreference === "Standard"}
            onChange={handleChange}
          />
        </section>

        <section className="radio-option">
          <label htmlFor="outside">Outside</label>
          <input
            type="radio"
            id="outside"
            name="seatingPreference"
            value="Outside"
            checked={formData.seatingPreference === "Outside"}
            onChange={handleChange}
          />
        </section>

        <h5>
          Your selected seating preference is:{" "}
          <span style={{ color: "white" }}>{formData.seatingPreference}</span>
        </h5>

        <div className="letsgo-btn-container">
          <button id="letsgo-btn">Lets go</button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;

*/

/*
 reserved code 1:
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
