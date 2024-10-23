import React from "react";
import "./ServiceCards.css";

let services = [
  {
    title: "Game Reviews",
    description: "Detailed reviews of the latest and most popular games.",
    imageUrl: "/src/assets/game1.jpg",
  },
  {
    title: "Exclusive Game Guides",
    description:
      "In-depth guides and walkthroughs to help you master any game.",
    imageUrl: "/src/assets/game2.jpg",
  },
  {
    title: "Tournaments & Events",
    description: "Join the hottest gaming tournaments and live events.",
    imageUrl: "/src/assets/game3.jpg",
  },
];

let ServiceCards = ({ isDarkMode }) => {
  return (
    <section className={`service-cards ${isDarkMode ? "" : "light"}`}>
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${isDarkMode ? "" : "light"}`}
          >
            <img src={service.imageUrl} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
