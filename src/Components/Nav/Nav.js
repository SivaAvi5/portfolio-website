import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Logo from "../../logo/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="nav">
      <div className="nav__container">
        <NavLink to="/" className="links" activeClassName="active">
          <img src={Logo} alt="logo" />
        </NavLink>
        <div className={`nav__btns ${isOpen ? "open" : ""}`}>
          <NavLink exact to="/" className="links" activeClassName="active">
            <span>Home</span>
          </NavLink>
          <NavLink to="/skills" className="links" activeClassName="active">
            <span>Skills</span>
          </NavLink>
          <NavLink to="/projects" className="links" activeClassName="active">
            <span>Projects</span>
          </NavLink>
          <NavLink to="/contact" className="links" activeClassName="active">
            <span>Contact</span>
          </NavLink>
        </div>
        {isOpen ? (
          <GrFormClose className="burger" onClick={() => setIsOpen(false)} />
        ) : (
            <HiMenuAlt1 className="burger" onClick={() => setIsOpen(true)}/>
        )}
      </div>
    </div>
  );
};

export default Nav;
