import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./homepage";
import About from "./about";
import Portfolio from "./portfolio";     
import Services from "./services";
import Contact from "./contact";

const Header = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li className="home">
            <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default Header;
