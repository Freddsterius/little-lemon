import React from "react";
import Hero from "../hero/Hero";
import Highlights from "../highlights/Highlights";
import Testimonials from "../testimonials/Testimonials";
import About from "../about/About";

import Counter from "../main/Counter";

const HomePage = () => {
  return (
    <>
      {" "}
      <Counter initialCount={0} />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
};

export default HomePage;
