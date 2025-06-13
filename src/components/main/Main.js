import React, { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../homepage/HomePage";
import BookingPage from "../booking/bookingPage/BookingPage";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const selectedDate = action.payload;
      // Here you'd dynamically generate times based on selectedDate.
      // For now, just return the same list.
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
    default:
      return state;
  }
};

const Main = () => {
  // Reservation Time State  using the useRducer hook
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
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
