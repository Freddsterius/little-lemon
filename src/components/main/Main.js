import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../homepage/HomePage";
import BookingPage from "../booking/bookingPage/BookingPage";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
