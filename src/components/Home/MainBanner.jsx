import React from "react";
import "./MainBanner.css";

let MainBanner = ({ isDarkMode }) => {
  return (
    <section className={`main-banner ${isDarkMode ? "" : "light"}`}>
      <div className="banner-content">
        <h1>
          Welcome to <span>GameZone</span>
        </h1>
        <p>The Ultimate Gaming Hub</p>
        <div className="banner-buttons">
          <a href="#games" className="btn-primary">
            Explore Games
          </a>
          <a href="#tournaments" className="btn-secondary">
            Join Tournaments
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
