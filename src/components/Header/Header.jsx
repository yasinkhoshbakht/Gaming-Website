import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

let Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <div className="logo">
        <Link to="/">🎮 Game Site</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
