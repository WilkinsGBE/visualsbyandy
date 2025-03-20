import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Custom.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with Glow Effect */}
        <h1 className="text-[#A0522D] text-2xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(160,82,45,0.8)]">
          VisualsByAndy
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/homepage" className="text-white text-lg hover:text-[#A0522D] transition duration-300">Home</Link>
          <Link to="/about" className="text-white text-lg hover:text-[#A0522D] transition duration-300">About</Link>
          <Link to="/portfolio" className="text-white text-lg hover:text-[#A0522D] transition duration-300">Portfolio</Link>
          <Link to="/services" className="text-white text-lg hover:text-[#A0522D] transition duration-300">Services</Link>
          <Link to="/contact" className="text-white text-lg hover:text-[#A0522D] transition duration-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button (📸 Icon) */}
        <button className="md:hidden text-3xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "❌" : "📸"}
        </button>
      </div>

      {/* Mobile Navigation (Slide-in effect) */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-black bg-opacity-90 backdrop-blur-md shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close Button (❌) */}
        <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setMenuOpen(false)}>
          ❌
        </button>

        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          <Link to="/homepage" className="text-white text-lg hover:text-[#A0522D] transition duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-white text-lg hover:text-[#A0522D] transition duration-300" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/portfolio" className="text-white text-lg hover:text-[#A0522D] transition duration-300" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/services" className="text-white text-lg hover:text-[#A0522D] transition duration-300" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="text-white text-lg hover:text-[#A0522D] transition duration-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
