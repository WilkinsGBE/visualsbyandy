import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "../images/image1.JPEG",
  "../images/image2.jpg",
  "../images/image3.jpg",
  "../images/image4.jpg",
  "../images/image5.jpg",
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative flex flex-col items-center justify-center h-[500px] w-[350px] mx-auto">
        <div className="relative w-full h-[400px]">
          {images.map((src, index) => (
            <AnimatePresence key={index}>
              {index === currentIndex && (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 50, rotate: 75 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -50, rotate: 110 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
            </AnimatePresence>
          ))}
        </div>
  
        {/* Glowing Button */}
        <button className="mt-6 px-6 py-3 bg-[#A0522D] hover:bg-[#8B4513] text-white font-semibold text-lg rounded-full transition shadow-[0px_0px_15px_rgba(160,82,45,0.6)] hover:shadow-[0px_0px_25px_rgba(139,69,19,0.8)]">
        View Portfolio
      </button>
      </div>
    );
  };
  
export default Slideshow;
