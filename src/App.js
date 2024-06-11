import "./App.css";
import Nav from "./Components/Nav/Nav";
import ContactScreen from "./Pages/Contact/ContactScreen";
import HomeScreen from "./Pages/Home/HomeScreen";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import { BrowserRouter as router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<ContactScreen />}  />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
