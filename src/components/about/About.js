import React from "react";
import imgBottom from "../../assets/images/greek salad.jpg";
import imgTop from "../../assets/images/restauranfood.jpg";

const About = () => {
  return (
    <section class="about">
      <div class="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          jfhff dfdf ffr rer rererfdg dvdgrcv
          <br />
          gegeg erg ege gergege gg e gegeggerg ergegg
          <br />
          eg ergerg rgrgvge grg fdgf g gfgg <br />
          rg gerhedg ergtrsgefggrfgf
          <br />
          dgnbj jhjhrfh sjybsakuhj ash da
          <br />
          dnbgdn hd dhkd dgagnak dagjgudg dakjasdkj rg gerhedg ergtrsgefggrfgf
          <br />
          dgnbj jhjhrfh sjybsakuhj ash da
          <br />
          dnbgdn hd dhkd dgagnak dagjgudg dakjasdkj rg gerhedg ergtrsgefggrfgf
          <br />
          dgnbj jhjhrfh sjybsakuhj ash da
          <br />
          dnbgdn hd dhkd dgagnak dagjgudg dakjasdkj
        </p>
      </div>
      <div class="about-images">
        <img src={imgTop} class="photo bottom-img" alt="little lemon logo" />
        <img src={imgBottom} class="photo top-img" alt="little lemon logo" />
      </div>
    </section>
  );
};

export default About;
