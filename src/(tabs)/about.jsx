import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const About = () => {
  const base = import.meta.env.BASE_URL;
  const { t, i18n } = useTranslation();

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-black to-[#A0522D] flex items-center justify-center px-12 py-20">
      <div className="max-w-7xl w-full grid md:grid-cols-10 gap-12 items-center">
        {/* Photographer's Image (30%) */}
        <motion.div
          className="md:col-span-3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}andy.jpg`}
            alt="Photographer"
            className="w-full max-w-[320px] h-auto object-cover rounded-2xl shadow-lg border-4 border-[#A0522D]"
          />
        </motion.div>

        {/* Photographer's Biography (70%) */}
        <motion.div
          className="md:col-span-7 text-white flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Typewriter effect for Meet Andy */}
          <h2 className="text-5xl font-bold text-[#A0522D] mb-6">
            <Typewriter
              words={[t("about.meetAndy")]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={90}
            />
          </h2>

          {/* Biography Sections with Borders and Animations */}
          <div className="space-y-6 pl-4">
            <motion.div
              className="border-l-4 border-[#A0522D] pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg leading-relaxed text-gray-300">
                {t("about.bio1")}
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-[#A0522D] pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-lg leading-relaxed text-gray-300">
                {t("about.bio2")}
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-[#A0522D] pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-lg leading-relaxed text-gray-300">
                {t("about.bio3")}
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-[#A0522D] pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              <p className="text-lg leading-relaxed text-gray-300">
                {t("about.bio4")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
