import React from "react";
import Slideshow from "../../components/SlideShow";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_80%)] opacity-50 pointer-events-none"></div>

      {/* Main Content */}
      <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        Capturing Life’s Best Moments
      </h1>
      <p className="text-lg md:text-xl text-white max-w-2xl">
        Professional photos that last forever.
      </p>

      {/* Slideshow */}
      <Slideshow />
    </div>
  );
};

export default Home;
