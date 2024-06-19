import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import netflixCard from "../../images/netflixCard.jpg";
import fitnessCard from "../../images/fitnessCard.jpg";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Netflix-clone",
      img: netflixCard,
      url:'https://gold-gym-siva-dev.netlify.app/',
      githubLink: "https://github.com/SivaAvi5/netflix-clone",
    },
    {
      id: "2",
      name: "Fitness-web-app",
      img: fitnessCard,
      url:"https://gold-gym-siva-dev.netlify.app/",
      githubLink: "https://github.com/SivaAvi5/fitness-app",
    },
  ];

  return (
    <div className="project__card__center">
      {projects.map((project) => (
        <div className="project__card" key={project.id}>
          <h2>{project.name}</h2>
          <p className="project__img">
            <img src={project.img} alt={project.name}></img>
          </p>
          <div className="btn">
            <button>
              <a href={project.url}>Link</a>
            </button>
            <button>
              <a href={project.githubLink}>
                <FaGithub />
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
