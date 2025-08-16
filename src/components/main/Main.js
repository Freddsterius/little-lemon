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
