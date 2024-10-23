import React from "react";
import "./AboutInfo.css";

let AboutInfo = ({ isDarkMode }) => {
  return (
    <section className={`about-info ${isDarkMode ? "" : "light"}`}>
      <h2>About GameZone</h2>
      <p>
        GameZone is the ultimate destination for gamers. From the latest news,
        reviews, and in-depth guides to exclusive in-game items and tournaments,
        we bring everything you need to stay at the top of your game. Join us
        and become part of a growing community of gamers worldwide.
      </p>
    </section>
  );
};

export default AboutInfo;
