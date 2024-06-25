import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container">
      <div className="centered-box">
        <h2>Frontend Developer</h2>
        <p>
        Creating new concepts is my passion. As a frontend developer, I enjoy crafting interfaces that improve user experiences. I turn complex problems into intuitive, beautiful, and functional designs. Each project is an opportunity to positively impact users through attention to detail and a strong grasp of modern web technologies.
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
