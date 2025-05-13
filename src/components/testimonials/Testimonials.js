import React from "react";
import profilePhoto from "../../assets/images/wind-energy-7342177_1920.jpg";

const Testimonials = () => {
  return (
    <section class="testimonials">
      <h2 class="testimonials-title">Testimonials</h2>
      <div class="ratings">
        <div class="rating-card">
          <p>Rating</p>
          <div class="photo-name">
            <img src={profilePhoto} alt="profile photo here" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div class="rating-card">
          <p>Rating</p>
          <div class="photo-name">
            <img src={profilePhoto} alt="profile photo here" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div class="rating-card">
          <p>Rating</p>
          <div class="photo-name">
            <img src={profilePhoto} alt="profile photo here" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div class="rating-card">
          <p>Rating</p>
          <div class="photo-name">
            <img src={profilePhoto} alt="profile photo here" />
            <p>Name</p>
          </div>
          <p>Text</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
