import React from "react";
import profilePhoto from "../../assets/images/yellowbg.jpg";
import profilePhotoi from "../../assets/images/gradientbg2.jpg";
import profilePhotoii from "../../assets/images/gradientbg.jpg";
import profilePhotoiii from "../../assets/images/bluebg.jpg";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section class="testimonials">
      <h2 class="testimonials-title">Testimonials</h2>
      <div class="ratings">
        <div class="rating-card">
          <p>Rating</p>
          <div class="photo-name">
            <img src={profilePhoto} alt="user profile 1" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div class="rating-card">
          <p>Rating</p>
          <div class="photo-name">
            <img src={profilePhotoi} alt="user profile 2" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div class="rating-card">
          <p>Rating</p>
          <div class="photo-name">
            <img src={profilePhotoii} alt="user profile 3" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>
        <div class="rating-card">
          <p>Rating</p>
          <div class="photo-name">
            <img src={profilePhotoiii} alt="user profile 4" />
            <p>Name</p>
          </div>
          <p>Text</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
