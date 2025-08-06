import React, { useReducer /* useEffect */ } from "react";
//import { fetchAPI, submitAPI } from "../../APIs/api";
import { Routes, Route } from "react-router-dom";

import HomePage from "../homepage/HomePage";
import BookingPage from "../booking/bookingPage/BookingPage";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";
//import { type } from "@testing-library/user-event/dist/type";

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes(state, action) {
  switch (action.type) {
    case "update_times":
      // replace state with the new availableTimes
      return action.availableTimes;
    default:
      return state;
  }
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleDateChange = (selectedDate) => {
    dispatch({
      type: "update_times",
      availableTimes: initializeTimes(),
      date: selectedDate, // include date in action
    });
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
              handleDateChange={handleDateChange}
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

/*
old code 2

import React, { useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../../APIs/api";
import { Routes, Route } from "react-router-dom";

import HomePage from "../homepage/HomePage";
import BookingPage from "../booking/bookingPage/BookingPage";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";

const initializeTimes = () => {
  return []; // Start with no times available until fetchAPI runs
};

const updateTimes = (state, action) => {
  switch (action.type) {
    // Here you'd dynamically generate times based on selectedDate.
    case "UPDATE_TIMES":
      const selectedDate = action.payload; // new array of times
      return selectedDate; // new array of times

    // For now, just return the same list.
    //return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
    default:
      return state;
  }
};

const Main = () => {
  // Reservation Time State  using the useRducer hook
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [
      //undefined
    ],
    initializeTimes
  );

  useEffect(() => {
    const fetchTimes = async () => {
      const today = new Date();
      const times = fetchAPI(today);
      dispatch({ type: "UPDATE_TIMES", payload: times });
    };

    fetchTimes();
  }, []);

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

/*
// Main.js
import React, { useState, useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./api"; // Assumes fetchAPI is imported

// Reducer to update available times array
function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // payload is the array of times
    default:
      return state;
  }
}

function Main() {
  // Lifted state: selectedDate in parent
  const [selectedDate, setSelectedDate] = useState("");
  // useReducer to hold the times array
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  // Fetch available times whenever selectedDate changes
  useEffect(() => {
    if (!selectedDate) return;
    const dateObj = new Date(selectedDate);
    fetchAPI(dateObj).then((times) => {
      dispatch({ type: "UPDATE_TIMES", payload: times });
    });
  }, [selectedDate]);

  // Handler passed to BookingForm
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div>
      <BookingForm
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        availableTimes={availableTimes}
      />
      {/* ...rest of Main component... }
    </div>
  );
}

export default Main;
*/

/*
old code 1

// Main.js
import React, { useState, useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./api"; // Assumes fetchAPI is imported

// Reducer to update available times array
function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // payload is the array of times
    default:
      return state;
  }
}

function Main() {
  // Lifted state: selectedDate in parent
  const [selectedDate, setSelectedDate] = useState("");
  // useReducer to hold the times array
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  // Fetch available times whenever selectedDate changes
  useEffect(() => {
    if (!selectedDate) return;
    const dateObj = new Date(selectedDate);
    fetchAPI(dateObj).then((times) => {
      dispatch({ type: "UPDATE_TIMES", payload: times });
    });
  }, [selectedDate]);

  // Handler passed to BookingForm
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div>
      <BookingForm
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        availableTimes={availableTimes}
      />
      {/* ...rest of Main component... }
    </div>
  );
}

export default Main;
*/
