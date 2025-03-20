import React from "react";
import { Link } from "react-router-dom";
import "./styles/Custom.css"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with Glow Effect */}
        <h1 className="text-[#A0522D] text-2xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(160,82,45,0.8)]">
        📸 VisualsByAndy
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/homepage"
                className="text-white text-lg hover:text-[#A0522D] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-lg hover:text-[#A0522D] transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-white text-lg hover:text-[#A0522D] transition duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white text-lg hover:text-[#A0522D] transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-lg hover:text-[#A0522D] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
