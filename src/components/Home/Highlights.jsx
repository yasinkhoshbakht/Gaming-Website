import React from "react";
import "./Highlights.css";

let highlightsData = [
  {
    title: "Top Game Releases",
    description: "Check out the latest and greatest games of this year.",
    imageUrl: "/src/assets/game6.jpeg",
  },
  {
    title: "Exclusive In-game Items",
    description: "Unlock special items by participating in our tournaments.",
    imageUrl: "/src/assets/game5.jpg",
  },
  {
    title: "Live Streams & Events",
    description: "Join live gaming events and streams happening every week.",
    imageUrl: "/src/assets/game4.jpg",
  },
];

let Highlights = ({ isDarkMode }) => {
  return (
    <section className={`highlights ${isDarkMode ? "" : "light"}`}>
      <h2>Highlights</h2>
      <div className="highlights-grid">
        {highlightsData.map((highlight, index) => (
          <div
            key={index}
            className={`highlight-card ${isDarkMode ? "" : "light"}`}
          >
            <img src={highlight.imageUrl} alt={highlight.title} />
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
