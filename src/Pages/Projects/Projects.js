import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import netflixCard from "../../images/netflixCard.jpg";
import fitnessCard from "../../images/fitnessCard.jpg";
import whatsappCard from "../../images/Whatsapp.webp"

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Netflix-clone",
      img: netflixCard,
      url:'https://sage-tanuki-21f0ba.netlify.app/',
      githubLink: "https://github.com/SivaAvi5/netflixclone",
    },
    {
      id: "2",
      name: "Fitness-web-app",
      img: fitnessCard,
      url:"https://sivagoldsgym.netlify.app/",
      githubLink: "https://github.com/SivaAvi5/fitness-app",
    },
    {
      id: "3",
      name: "Whatsapp-clone",
      img: whatsappCard,
      url:"https://sivawhatsappclone.web.app/",
      githubLink: "https://github.com/SivaAvi5/whatsappclone",
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
