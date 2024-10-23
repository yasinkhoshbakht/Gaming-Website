import React from "react";
import "./Testimonials.css";

let testimonials = [
  {
    name: "John Doe",
    quote:
      "GameZone is my go-to platform for all things gaming. The guides are amazing and tournaments are super fun!",
    avatarUrl: "/src/assets/commentsUsers.jpg",
  },
  {
    name: "Jane Smith",
    quote:
      "The best place to keep up with new game releases and live events. Love the community and content!",
    avatarUrl: "/src/assets/commentsUsers.jpg",
  },
  {
    name: "Sam Wilson",
    quote:
      "I’ve improved my skills drastically thanks to their detailed guides. Highly recommend GameZone!",
    avatarUrl: "/src/assets/commentsUsers.jpg",
  },
];

let Testimonials = ({ isDarkMode }) => {
  return (
    <section className={`testimonials ${isDarkMode ? "" : "light"}`}>
      <h2>What Our Users Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${isDarkMode ? "" : "light"}`}
          >
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              className="avatar"
            />
            <blockquote>{testimonial.quote}</blockquote>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
