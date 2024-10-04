import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../logo/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const Nav = ({homeRef,skillsRef,projectRef,contactRef,scrollToSection}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav__container">
        <img onClick={() => scrollToSection(homeRef)} className="links" activeclassname="active" src={Logo} alt="logo" />

        <div className={`nav__btns ${isOpen ? "open" : ""}`}>
          <span onClick={() => scrollToSection(homeRef)} className="links" activeclassname="active">
            Home
          </span>

          <span onClick={() => scrollToSection(skillsRef)} className="links" activeclassname="active">
            Skills
          </span>

          <span onClick={() => scrollToSection(projectRef)} className="links" activeclassname="active">
            Projects
          </span>

          <span onClick={() => scrollToSection(contactRef)} className="links" activeclassname="active">
            Contact
          </span>
        </div>
        {isOpen ? (
          <GrFormClose className="burger" onClick={() => setIsOpen(false)} />
        ) : (
          <HiMenuAlt1 className="burger" onClick={() => setIsOpen(true)} />
        )}
      </div>
    </div>
  );
};

export default Nav;
