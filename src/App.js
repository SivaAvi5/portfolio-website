import "./App.css";
import Nav from "./Components/Nav/Nav";
import ContactScreen from "./Pages/Contact/ContactScreen";
import HomeScreen from "./Pages/Home/HomeScreen";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import { useEffect, useRef, useState } from "react";
import ParticlesBackground from "./Components/Nav/ParticlesBackground";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="app">
      {/* <ParticlesBackground /> */}

      <Nav
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
        scrollPercentage={scrollPercentage}
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
