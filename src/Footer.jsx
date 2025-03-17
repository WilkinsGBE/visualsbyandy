import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-between items-center bg-black bg-opacity-80 text-white text-sm py-6 px-8">
        <div>
          <p>Copyright. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-4 font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            VisualsByAndy
          </h3>
        </div>
        <div>
          <p>
            Made by <span>Wilkins</span>
          </p>
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-2xl hover:text-[#A0522D] transition"
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-2xl hover:text-[#A0522D] transition"
        />
      </div>
    </footer>
  );
};

export default Footer;
