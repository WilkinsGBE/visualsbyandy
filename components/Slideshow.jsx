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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-[500px] w-[350px] mx-auto">
      <div className="relative w-full h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
          >
            <img
              src={images[currentIndex]}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slideshow;
