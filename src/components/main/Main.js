import React, { useReducer /*useEffect*/ } from "react";
import { fetchAPI, submitAPI } from "../../APIs/api";
import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "../homepage/HomePage";
import BookingPage from "../booking/bookingPage/BookingPage";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";
import Login from "../login/Login";
import Menu from "../menu/Menu";

import ShippingInfo from "../booking/shippingInfo/ShippingInfo";
import ConfirmedBooking from "../booking/confirmedBooking/ConfirmedBooking";

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload;
    default:
      return state;
  }
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleDateChange = (dateString) => {
    const dateObj = new Date(dateString);

    const times = fetchAPI(dateObj);
    dispatch({ type: "SET_TIMES", payload: times });
  };

  const navigate = useNavigate();

  const submitForm = (event, formData) => {
    event.preventDefault();

    if (submitAPI(formData)) {
      navigate("/shipping");
    } else {
      alert("Booking failed. Please try again.");
    }
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
              submitForm={submitForm}
            />
          }
        />
        <Route path="/hero" element={<Hero />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/shipping" element={<ShippingInfo />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;

/* previuous code 3
import React, { useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../../APIs/api";
import { Routes, Route } from "react-router-dom";

import HomePage from "../homepage/HomePage";
import BookingPage from "../booking/bookingPage/BookingPage";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";

// function initializeTimes() {
//   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
// }
function initializeTimes() {
  const today = new Date().toISOString().split("T")[0];
  return fetchAPI(today);
}

// function updateTimes(state, action) {
//   switch (action.type) {
//     case "update_times":
//       // replace state with the new availableTimes
//       return action.availableTimes;
//     default:
//       return state;
//   }
// }

function updateTimes(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload;
    default:
      return state;
  }
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // useEffect(() => {
  //   const today = new Date().toISOString().split("T")[0];
  //   fetchAPI(today).then((times) => {
  //     dispatch({ type: "SET_TIMES", payload: times });
  //   });
  // }, []);
  useEffect(() => {
    const today = new Date();
    fetchAPI(today).then((times) => {
      dispatch({ type: "SET_TIMES", payload: times });
    });
  }, []);

  // const handleDateChange = (selectedDate) => {
  //   dispatch({
  //     type: "update_times",
  //     availableTimes: initializeTimes(),
  //     date: selectedDate, // include date in action
  //   });
  // };

  // const handleDateChange = (date) => {
  //   fetchAPI(date).then((times) => {
  //     dispatch({ type: "SET_TIMES", payload: times });
  //   });
  // };

  const handleDateChange = (dateString) => {
    const dateObj = new Date(dateString); // Convert the selected date string to a Date object

    console.log("fetchAPI argument:", dateObj, typeof dateObj);

    fetchAPI(dateObj).then((times) => {
      dispatch({ type: "SET_TIMES", payload: times });
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
*/

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
