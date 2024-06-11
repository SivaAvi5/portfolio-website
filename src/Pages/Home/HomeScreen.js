import React from "react";
import "./HomeScreen.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HomeScreen = () => {
  return (
    <div className="home__screen">
      <div className="hero">
        <div className="hero__section">
          <h1>Hi,</h1>
          <h2> I'm Siva</h2>
          <h3>Front-End web developer</h3>
          <p>
            I'm eager to contribute to exciting projects and collaborate with
            other developers to bring innovative ideas to life. Let's build
            something great together!
          </p>
        </div>
      </div>
      <div className="buttons">
        <a
          href="https://github.com/SivaAvi5"
          className="btn btn-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/siva-t-392a97153"
          className="btn btn-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default HomeScreen;