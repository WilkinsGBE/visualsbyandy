import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "../images/NewBeginnings/beginnings1.JPG",
  "../images/SabbatJeunesse/chante1.JPG",
  "../images/Reconnected/reconnected3.JPG",
  "../images/Gala/gala7.JPG",
  "../images/RenewalMinistry/renewal3.JPG",
  "../images/Gala/gala1.JPG",
  "../images/RenewalMinistry/renewal4.JPG",
  "../images/SabbatJeunesse/chante2.JPG",
  "../images/Reconnected/reconnected4.JPG",
  "../images/NewBeginnings/beginnings5.JPG",
  "../images/Gala/gala4.JPG",
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
    </div>
  );
};

export default Slideshow;
