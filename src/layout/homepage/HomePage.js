import React from "react";
import Hero from "../../pages/hero/Hero";
import Highlights from "../../pages/highlights/Highlights";
import Testimonials from "../../pages/testimonials/Testimonials";
import About from "../../pages/about/About";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
};

export default HomePage;
