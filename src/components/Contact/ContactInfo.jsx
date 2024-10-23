import React from "react";
import "./ContactInfo.css";

let contactDetails = [
  {
    type: "Phone",
    value: "+1 (123) 456-7890",
    icon: "📞",
  },
  {
    type: "Email",
    value: "support@gamezone.com",
    icon: "✉️",
  },
  {
    type: "Location",
    value: "123 Gaming Street, Gamerville, USA",
    icon: "📍",
  },
];

let ContactInfo = ({ isDarkMode }) => {
  return (
    <section className={`contact-info ${isDarkMode ? "" : "light"}`}>
      <h2>Contact Information</h2>
      <ul className="contact-list">
        {contactDetails.map((detail, index) => (
          <li
            key={index}
            className={`contact-item ${isDarkMode ? "" : "light"}`}
          >
            <span className="icon">{detail.icon}</span>
            <div>
              <h3>{detail.type}</h3>
              <p>{detail.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactInfo;
