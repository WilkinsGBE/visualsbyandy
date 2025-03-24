import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const base = import.meta.env.BASE_URL;

const images = [
  `${base}collections/NewBeginnings/beginnings1.jpg`,
  `${base}collections/SabbatJeunesse/chante1.jpg`,
  `${base}collections/Reconnected/reconnected3.jpg`,
  `${base}collections/Gala/gala7.jpg`,
  `${base}collections/RenewalMinistry/renewal3.jpg`,
  `${base}collections/Gala/gala1.jpg`,
  `${base}collections/RenewalMinistry/renewal4.jpg`,
  `${base}collections/SabbatJeunesse/chante2.jpg`,
  `${base}collections/Reconnected/reconnected4.jpg`,
  `${base}collections/NewBeginnings/beginnings5.jpg`,
  `${base}collections/Gala/gala4.jpg`,
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
      <div className="relative w-full h-[400px] overflow-hidden">
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
