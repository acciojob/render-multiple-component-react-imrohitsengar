import React from "react";
import "../styles/App.css";

const projects = [
  {
    name: "PayFlow",
    description:
      "A full-stack digital payments platform built with Next.js, Express, and PostgreSQL — managed as a Turborepo monorepo.",
  },
  {
    name: "SnipLink",
    description:
      "A powerful link management dashboard that helps you track clicks, engagement, and audience behavior—all in one place.",
  },
  {
    name: "NutriScan",
    description:
      "An AI-powered nutrition scanner that helps you make healthier food choices by analyzing product labels and providing personalized recommendations.",
  },
];

const App = () => {
  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;
