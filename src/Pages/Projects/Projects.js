import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import projectimg from "../../images/project-img.jpg";

const Projects = () => {
  const projects = [
    {
      id:'1',
      name: "Netflix-clone",
      projectimg: "NetflixCard",
      link: "https://github.com/SivaAvi5/netflix-clone",
    },
    {
      id:'2',
      name: "Netflix-clone",
      projectimg: "NetflixCard",
      link: "https://github.com/SivaAvi5/netflix-clone",
    },
  ];

  return (
    <div className="project__card__center">
      {projects.map((project) => (
        <div className="project__card" key={project.id}>
          <h2>{project.name}</h2>
          <p className="project__img">
            <img src={projectimg}></img>
          </p>
          <button>
            <a href={project.link}>
              <FaGithub /> 
              Link
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
