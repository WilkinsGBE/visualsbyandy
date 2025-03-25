import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-[#A0522D] text-2xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(160,82,45,0.8)]">
          VisualsByAndy
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/homepage"
            className="relative text-white text-lg transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#A0522D] before:transition-all before:duration-300 hover:before:w-full"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/about"
            className="relative text-white text-lg transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#A0522D] before:transition-all before:duration-300 hover:before:w-full"
          >
            {t("header.about")}
          </Link>
          <Link
            to="/portfolio"
            className="relative text-white text-lg transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#A0522D] before:transition-all before:duration-300 hover:before:w-full"
          >
            {t("header.portfolio")}
          </Link>
          <Link
            to="/services"
            className="relative text-white text-lg transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#A0522D] before:transition-all before:duration-300 hover:before:w-full"
          >
            {t("header.services")}
          </Link>
          <Link
            to="/contact"
            className="relative text-white text-lg transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#A0522D] before:transition-all before:duration-300 hover:before:w-full"
          >
            {t("header.contact")}
          </Link>

          {/* Language Switcher */}
          <div className="space-x-2 ml-4">
            <button
              onClick={() => changeLanguage("en")}
              className="text-white hover:text-[#A0522D] transition"
            >
              EN
            </button>
            <span className="text-white">|</span>
            <button
              onClick={() => changeLanguage("fr")}
              className="text-white hover:text-[#A0522D] transition"
            >
              FR
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-black bg-opacity-90 backdrop-blur-md shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          <Link
            to="/homepage"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.home")}
          </Link>
          <Link
            to="/about"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.about")}
          </Link>
          <Link
            to="/portfolio"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.portfolio")}
          </Link>
          <Link
            to="/services"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.services")}
          </Link>
          <Link
            to="/contact"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("header.contact")}
          </Link>

          {/* Language Switcher (Mobile) */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => changeLanguage("en")}
              className="text-white hover:text-[#A0522D] transition"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className="text-white hover:text-[#A0522D] transition"
            >
              FR
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
