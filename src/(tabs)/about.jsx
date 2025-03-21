import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-black to-[#A0522D] flex items-center justify-center px-12 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-10 gap-12 items-center">
        {/* Photographer's Image (30%) */}
        <motion.div 
          className="md:col-span-3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="../images/Gala/gala3.JPG"
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
            <Typewriter words={["Meet Andy !"]} loop={1} cursor cursorStyle="|" typeSpeed={90} />
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
                Andy is a young photographer whose journey to faith and purpose in
                his art began through the powerful experience of Christian concerts.
                Growing up without a Christian background, Andy found his way to
                faith later in life, drawn in by the energy of worship and the sense
                of community it created. During his search for a way to honor God,
                he discovered that photography was his calling. He began capturing
                moments at Christian concerts and other worship events, realizing
                that through his camera, he could honor God by sharing the beauty
                and emotion of those sacred moments.
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-[#A0522D] pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-lg leading-relaxed text-gray-300">
                Andy’s photography is focused on the raw, authentic moments of
                worship—whether it’s the intensity of a worship leader, the joy of
                the congregation, or the quiet moments of reflection. His work aims
                to show how music and worship can bring people closer to God and
                create a deep sense of connection with one another.
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-[#A0522D] pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-lg leading-relaxed text-gray-300">
                Since embracing his faith and discovering his purpose through
                photography, Andy has had the opportunity to work with churches,
                Christian events, and music ministries, using his art to document
                the power of worship. His images serve as a reminder of how worship
                invites God’s presence into our lives, creating moments of
                transformation and community.
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-[#A0522D] pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              <p className="text-lg leading-relaxed text-gray-300">
                Through his photography, Andy hopes to inspire others to see and
                feel the presence of God in their own worship experiences. With a
                heart dedicated to honoring God through his talent, Andy continues
                to capture the beauty of Christian concerts and the profound impact
                of worship.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
