import React from "react";
import "./testimonialCard.css";

const TestimonialCard = ({ name, reviewText, image, rating }) => {
  return (
    <div>
      <div className="rating-card">
        <p className="rating-score">{rating}</p>

        <div className="photo-name-container">
          <img src={image} alt="user profile 1" />
          <p>{name}</p>
        </div>

        <p className="review-text">{reviewText}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
