import "./App.css";
import Nav from "./Components/Nav/Nav";
import ContactScreen from "./Pages/Contact/ContactScreen";
import HomeScreen from "./Pages/Home/HomeScreen";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import { useRef } from "react";
import ParticlesBackground from "./Components/Nav/ParticlesBackground";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <ParticlesBackground />

      <Nav
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
      <div className="screen">
        <div className="pages">
          <HomeScreen homeRef={homeRef} />
          <Skills skillsRef={skillsRef} />
          <Projects projectRef={projectRef} />
          <ContactScreen contactRef={contactRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
