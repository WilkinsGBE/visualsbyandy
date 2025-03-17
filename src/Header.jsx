import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header"> 
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
    </header>
  );
};

export default Header;
