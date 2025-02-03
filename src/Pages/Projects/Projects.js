import React, { useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import netflixCard from "../../images/netflixCard.jpg";
import fitnessCard from "../../images/fitnessCard.jpg";
import chatcard from "../../images/chatapp.jpg";
import cryptocard from "../../images/crypto.png";

const Projects = ({ projectRef }) => {
  const projects = [
    {
      id: "1",
      name: "Crypto-Tracker",
      img: cryptocard,
      url: "https://cryptotracker229.netlify.app/",
      githubLink: "https://github.com/SivaAvi5/CryptoTracker",
      techs: ["React", "API", "MUI"],
    },
    {
      id: "2",
      name: "Netflix-clone",
      img: netflixCard,
      url: "https://sage-tanuki-21f0ba.netlify.app/",
      githubLink: "https://github.com/SivaAvi5/netflixclone",
      techs: ["React", "Redux", "API", "Firebase", "Stripe"],
    },
    {
      id: "3",
      name: "Fitness-web-app",
      img: fitnessCard,
      url: "https://sivagoldsgym.netlify.app/",
      githubLink: "https://github.com/SivaAvi5/fitness-app",
      techs: ["React", "MUI", "API", "Video"],
    },
    {
      id: "4",
      name: "Chat-web-app",
      img: chatcard,
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
