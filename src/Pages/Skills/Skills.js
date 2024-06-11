import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container">
      <div className="centered-box">
        <h2>Frontend Developer</h2>
        <p>
          Bringing new concepts to life is my passion. As a frontend developer,
          I feel privileged to create interfaces that directly enhance user
          experiences. I thrive on the challenge of turning complex problems
          into intuitive, beautiful, and functional designs. With each project,
          I aim to make a positive impact on the users' daily lives through
          meticulous attention to detail and a deep understanding of modern web
          technologies.
        </p>
        <div className="skills__container">
          <h3>Skills</h3>
          <span>Html, Css, Js, React, Redux, BootStrap, Firebase</span>
        </div>
        <div className="tools">
          <h3>Tools</h3>
          <span>VScode, Figma, Github, Photoshop</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
