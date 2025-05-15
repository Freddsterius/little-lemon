import React from "react";

import HomePage from "../homepage/HomePage";
import BookingPage from "../booking/bookingPage/BookingPage";

import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
};

export default Main;
