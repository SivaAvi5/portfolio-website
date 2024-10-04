import "./HomeScreen.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import skillanimation from "../../developer.json";
import Lottie from "lottie-react";

const HomeScreen = ({ homeRef }) => {
  return (
    <div ref={homeRef} className="home__screen">
      <Lottie
        animationData={skillanimation}
        loop={true}
        className="home__lottie"
      />
      <div>
        <div className="hero">
          <div className="hero__section">
            <div className="hi__container">
              <h1>Hi </h1>
              <p className="hi" style={{fontSize:"3rem"}}>👋</p>
            </div>
            <h2> I'm Siva</h2>
            <h3>React web developer</h3>
            <p>
              Crafting visually appealing and user-friendly web experiences
              using cutting-edge technologies. Transforming ideas into
              interactive digital solutions.
            </p>
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
      </div>
    </div>
  );
};

export default HomeScreen;
