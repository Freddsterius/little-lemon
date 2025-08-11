import React from "react";
import profilePhoto from "../../assets/testimonials/grad1.jpg";
import profilePhotoi from "../../assets/testimonials/grad2.jpg";
import profilePhotoii from "../../assets/testimonials/grad3.jpg";
import profilePhotoiii from "../../assets/testimonials/grad4.jpg";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>

      <div className="rating-cards-container">
        <div className="rating-card">
          <p>Rating</p>
          <div className="photo-name-container">
            <img src={profilePhoto} alt="user profile 1" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>

        <div className="rating-card">
          <p>Rating</p>
          <div className="photo-name-container">
            <img src={profilePhotoi} alt="user profile 2" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>

        <div className="rating-card">
          <p>Rating</p>
          <div className="photo-name-container">
            <img src={profilePhotoii} alt="user profile 3" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>

        <div className="rating-card">
          <p>Rating</p>
          <div className="photo-name-container">
            <img src={profilePhotoiii} alt="user profile 4" />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
