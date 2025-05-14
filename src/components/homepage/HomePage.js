import React from "react";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </div>
  );
};

export default HomePage;
