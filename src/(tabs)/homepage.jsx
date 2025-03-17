import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-[#A0522D] mb-4">
        Capturing Life’s Best Moments
      </h1>
      <p className="text-lg md:text-xl text-white max-w-2xl">
        Professional photography that tells your story.
      </p>
      <button className="mt-6 px-6 py-3 bg-[#A0522D] hover:bg-[#8B4513] text-white font-semibold text-lg rounded-full transition">
        View Portfolio
      </button>
    </div>
  );
};

export default Home;
