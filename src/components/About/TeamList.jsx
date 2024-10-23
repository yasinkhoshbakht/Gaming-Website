import React from "react";
import "./TeamList.css";

let teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    imageUrl: "/src/assets/user3.jpg",
  },
  {
    name: "Jessica Lee",
    role: "Community Manager",
    imageUrl: "/src/assets/user2.jpg",
  },
  {
    name: "Michael Smith",
    role: "Content Creator",
    imageUrl: "/src/assets/user1.jpg",
  },
];

let TeamList = ({ isDarkMode }) => {
  return (
    <section className={`team-list ${isDarkMode ? "" : "light"}`}>
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className={`team-card ${isDarkMode ? "" : "light"}`}>
            <img src={member.imageUrl} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamList;
