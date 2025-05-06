import React from "react";
import About from "../about/About";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";

const Main = () => {
  return (
    <main>
      <h1 style={{ color: "red" }}>This is the main component</h1>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <h1 style={{ color: "red" }}>This is the main component</h1>
    </main>
  );
};

export default Main;
