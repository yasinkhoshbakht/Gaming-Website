import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainBanner from "./components/Home/MainBanner";
import Highlights from "./components/Home/Highlights";
import AboutInfo from "./components/About/AboutInfo";
import TeamList from "./components/About/TeamList";
import ServiceCards from "./components/Services/ServiceCards";
import Testimonials from "./components/Services/Testimonials";
import ContactForm from "./components/Contact/ContactForm";
import ContactInfo from "./components/Contact/ContactInfo";

let App = () => {
  let [isDarkMode, setIsDarkMode] = useState(true);

  let toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainBanner isDarkMode={isDarkMode} />
                  <Highlights isDarkMode={isDarkMode} />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <AboutInfo isDarkMode={isDarkMode} />
                  <TeamList isDarkMode={isDarkMode} />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <ServiceCards isDarkMode={isDarkMode} />
                  <Testimonials isDarkMode={isDarkMode} />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <ContactForm isDarkMode={isDarkMode} />
                  <ContactInfo isDarkMode={isDarkMode} />
                </>
              }
            />
          </Routes>
        </main>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
};

export default App;
