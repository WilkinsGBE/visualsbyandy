import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../../components/SlideShow";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-black to-[#A0522D] flex flex-col items-center justify-center text-center px-6 py-4">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_80%)] opacity-50 pointer-events-none"></div>

      {/* Main Content */}
      <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-2">
        Capturing Life’s Best Moments
      </h1>

      <p className="text-lg md:text-xl text-white max-w-2xl mb-6">
        Professional pictures that last forever.
      </p>

      {/* Slideshow */}
      <div className="flex justify-center items-center w-full">
        <Slideshow />
      </div>

      {/* Glowing Button */}

      <button className="mt-6 px-6 py-3 bg-[#A0522D] hover:bg-[#8B4513] text-white font-semibold text-lg rounded-full transition shadow-[0px_0px_15px_rgba(160,82,45,0.6)] hover:shadow-[0px_0px_25px_rgba(139,69,19,0.8)]">
        <Link to="/portfolio">View Portfolio</Link>
      </button>
    </div>
  );
};

export default Home;
