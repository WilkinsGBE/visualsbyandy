import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Image paths (WebP & JPG)
const imagePaths = [
  { webp: "../images/webp/NewBeginnings/beginnings1.webp", jpg: "../images/NewBeginnings/beginnings1.JPG" },
  { webp: "../images/webp/SabbatJeunesse/chante1.webp", jpg: "../images/SabbatJeunesse/chante1.JPG" },
  { webp: "../images/webp/Reconnected/reconnected3.webp", jpg: "../images/Reconnected/reconnected3.JPG" },
  { webp: "../images/webp/Gala/gala7.webp", jpg: "../images/Gala/gala7.JPG" },
  { webp: "../images/webp/RenewalMinistry/renewal3.webp", jpg: "../images/RenewalMinistry/renewal3.JPG" },
  { webp: "../images/webp/Gala/gala1.webp", jpg: "../images/Gala/gala1.JPG" },
  { webp: "../images/webp/RenewalMinistry/renewal4.webp", jpg: "../images/RenewalMinistry/renewal4.JPG" },
  { webp: "../images/webp/SabbatJeunesse/chante2.webp", jpg: "../images/SabbatJeunesse/chante2.JPG" },
  { webp: "../images/webp/Reconnected/reconnected4.webp", jpg: "../images/Reconnected/reconnected4.JPG" },
  { webp: "../images/webp/NewBeginnings/beginnings5.webp", jpg: "../images/NewBeginnings/beginnings5.JPG" },
  { webp: "../images/webp/Gala/gala4.webp", jpg: "../images/Gala/gala4.JPG" },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // ✅ Preload WebP & JPG images
  useEffect(() => {
    const preloadImages = () => {
      const imagesObj = {};
      imagePaths.forEach((img) => {
        const image = new Image();
        image.src = img.webp; // Try WebP first
        image.onerror = () => {
          image.src = img.jpg; // If WebP fails, use JPG
        };
        imagesObj[img.jpg] = image;
      });
      setLoadedImages(imagesObj);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-[500px] w-[350px] mx-auto">
      <div className="relative w-full h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.picture
            key={imagePaths[currentIndex].jpg}
            initial={{ opacity: 0, y: 50, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -50, rotate: 110 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full rounded-xl shadow-xl"
          >
            {/* ✅ WebP loads first, but falls back to JPG if not supported */}
            <source srcSet={imagePaths[currentIndex].webp} type="image/webp" />
            <img
              src={loadedImages[imagePaths[currentIndex].jpg]?.src || imagePaths[currentIndex].jpg}
              alt={`Slideshow Image ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.picture>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slideshow;
