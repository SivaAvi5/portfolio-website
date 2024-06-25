import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import "./transitions.css";
import Nav from "./Components/Nav/Nav";
import ContactScreen from "./Pages/Contact/ContactScreen";
import HomeScreen from "./Pages/Home/HomeScreen";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Nav />
      <SwitchTransition>
        <CSSTransition key={location.key} classNames="slide" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
