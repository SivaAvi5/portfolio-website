import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import projectimg from "../../images/project-img.jpg";

const Projects = () => {
  return (
    <div className="project__card__center">
      <div className="project__card">
        <h2>Netflix-clone</h2>
        <p className="project__img">
          <img src={projectimg}></img>
        </p>
          <button>
            <a href="https://github.com/SivaAvi5/netflix-clone"><FaGithub />Link</a>
          </button>
      </div>
    </div>
  );
};

export default Projects;
