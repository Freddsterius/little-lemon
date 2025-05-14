import React from "react";

import HomePage from "../homepage/HomePage";
import About from "../about/About";

import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
