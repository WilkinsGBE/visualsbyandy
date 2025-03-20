import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-10 px-10 flex flex-col items-center">
      {/* Brand Name with Glow */}
      <h3 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] text-center">
        VisualsByAndy
      </h3>

      {/* Copyright & Creator Info */}
      <div className="text-center mt-4 space-y-2">
        <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
        <p>
          Made by <span className="text-[#A0522D] font-semibold">Wilkins</span>
        </p>
        <a
          href="mailto:wilkins4business@gmail.com"
          className="text-2xl hover:text-[#A0522D] transition cursor-pointer"
        >
        </a>
      </div>

      {/* Social Icons Section */}
      <div className="mt-6 flex space-x-6">
        <a
          href="https://www.instagram.com/visualsbyandy_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#A0522D] transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="mailto:andylorgis@gmail.com"
          className="text-2xl hover:text-[#A0522D] transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
