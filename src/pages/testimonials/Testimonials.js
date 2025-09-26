import React from "react";
import profilePhoto from "../../assets/testimonials/grad1.jpg";
import profilePhotoi from "../../assets/testimonials/grad2.jpg";
import profilePhotoii from "../../assets/testimonials/grad3.jpg";
import profilePhotoiii from "../../assets/testimonials/grad4.jpg";
import "./testimonials.css";
import TestimonialCard from "../../components/cards/testimonialsCard/TestimonialCard";

const testimonials = [
  {
    image: profilePhoto,
    name: "James Bond",
    reviewText:
      "asdf ghjk grter  erewrer fewfffwdyuu yuyy yu y y  las dfgh jkla sdf ghjkl fgfd derfg dfsdf ggtr ghfgd",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: profilePhotoi,
    name: "Peter Parker",
    reviewText:
      "asdf ghjk grter  erewrer fewfffwdyuu yuyy yu y y  las dfgh jkla sdf ghjkl fgfd derfg dfsdf ggtr ghfgd",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: profilePhotoii,
    name: "Bruce Wayne",
    reviewText:
      "asdf ghjk grter  erewrer fewfffwdyuu yuyy yu y y  las dfgh jkla sdf ghjkl fgfd derfg dfsdf ggtr ghfgd",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: profilePhotoiii,
    name: "Harry Potter",
    reviewText:
      "asdf ghjk grter  erewrer fewfffwdyuu yuyy yu y y  las dfgh jkla sdf ghjkl fgfd derfg dfsdf ggtr ghfgd",
    rating: "⭐⭐⭐⭐⭐",
  },
];
const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="rating-cards-container">
        {/* <div className="rating-card">
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
        </div> */}

        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            reviewText={testimonial.reviewText}
            image={testimonial.image}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

{
  /* <div class="card">
  <div class="image-content">
    <div class="card-image">
      <img src="greek-salad-50.webp" alt="" class="card-img" />
    </div>
  </div>

  <div class="text-content">
    <h2 class="name">James Bond</h2>
    <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus
      reiciendis ratione harum excepturi alias iste repudiandae molestiae minima
      porro?
    </p>

    <button class="button">View More</button>
  </div>
</div>; */
}
