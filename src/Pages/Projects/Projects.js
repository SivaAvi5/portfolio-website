import React, { useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import netflixCard from "../../images/netflixCard.jpg";
import fitnessCard from "../../images/fitnessCard.jpg";
import whatsappCard from "../../images/Whatsapp.webp";

const Projects = ({ projectRef }) => {
  const projects = [
    {
      id: "1",
      name: "Netflix-clone",
      img: netflixCard,
      url: "https://sage-tanuki-21f0ba.netlify.app/",
      githubLink: "https://github.com/SivaAvi5/netflixclone",
      techs: ["React", "Redux", "API", "Firebase", "Stripe"],
    },
    {
      id: "2",
      name: "Fitness-web-app",
      img: fitnessCard,
      url: "https://sivagoldsgym.netlify.app/",
      githubLink: "https://github.com/SivaAvi5/fitness-app",
      techs: ["React", "MUI", "API", "Video"],
    },
    {
      id: "3",
      name: "Whatsapp-clone",
      img: whatsappCard,
      url: "https://sivawhatsappclone.web.app/",
      githubLink: "https://github.com/SivaAvi5/whatsappclone",
      techs: ["React", "API", "Firebase", "context"],
    },
  ];

  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div ref={projectRef} className="projects">
      <h2>Projects</h2>
      <div className="project__card__center">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              onMouseMove={flipCard}
              className="project__card"
            >
              <h3>{project.name}</h3>
              <div className="project__img">
                <img src={project.img} alt={project.name}></img>
              </div>

              <div className="project__techs">
                {project.techs.map((tech, ind) => (
                  <span key={ind}>{tech}</span>
                ))}
              </div>

              <div className="btn">
                <button>
                  <a href={project.url}>Go Preview</a>
                </button>
                <button>
                  <a href={project.githubLink}>
                    <FaGithub /> code
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
