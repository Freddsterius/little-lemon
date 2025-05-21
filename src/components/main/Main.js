import React, { useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../homepage/HomePage";
import BookingPage from "../booking/bookingPage/BookingPage";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";

// Move these two functions here, above where they're used
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    /*const selectedDate = action.payload;*/
    // Here you'd dynamically generate times based on selectedDate.
    // For now, just return the same list.
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  // Reservation time state (optional if you manage all time selection through dispatch)
  const [selectedTime, setSelectedTime] = useState("17:00");

  const handleResTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              selectedTime={selectedTime}
              handleResTimeChange={handleResTimeChange}
              dispatch={dispatch}
            />
          }
        />
        <Route path="/hero" element={<Hero />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
