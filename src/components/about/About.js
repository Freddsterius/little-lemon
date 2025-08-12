import React from "react";
import imgBottom from "../../assets/about/Mario-and-Adrian-A.webp";
import imgTop from "../../assets/about/Mario-and-Adrian-B.webp";
import "./about.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-text-container">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae cum
          aliquid nemo, assumenda sapiente nobis ratione consequuntur corrupti,
          nostrum dolores dolore laboriosam praesentium fugiat reiciendis dicta
          adipisci obcaecati eveniet, quis qui vel ea vero! Culpa dolores earum
          asperiores, officiis sed consectetur, ducimus minima, consequatur
          blanditiis fugiat voluptas mollitia excepturi!
        </p>
      </div>

      <div className="about-images-container">
        <img src={imgTop} className="left-img" alt="little lemon logo" />
        <img src={imgBottom} className="right-img" alt="little lemon logo" />
      </div>
    </section>
  );
};

export default About;
