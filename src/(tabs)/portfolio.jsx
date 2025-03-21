import React from "react";
import { Typewriter } from "react-simple-typewriter";
import PortfolioCard from "../../components/PortfolioCard";

const portfolioItems = [
  {
    imageSrc: "../images/Gala/gala8.JPG",
    eventName: "New Year, New Blessings",
    eventDate: "December 29 2024",
  },
  {
    imageSrc: "../images/NewBeginnings/beginnings2.JPG",
    eventName: "New Beginnings",
    eventDate: "December 14 2024",
  },
  {
    imageSrc: "../images/SabbatJeunesse/chante4.JPG",
    eventName: "Praise Worship",
    eventDate: "December 21 2024",
  },
  {
    imageSrc: "../images/Reconnected/reconnected1.JPG",
    eventName: "Reconnected MTL",
    eventDate: "March 1st 2025",
  },
  {
    imageSrc: "../images/RenewalMinistry/renewal6.JPG",
    eventName: "Salem Youth Service",
    eventDate: "October 5 2024",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-black to-[#A0522D] px-6 py-12 flex flex-col justify-start items-center text-center">
      <section className="pt-16 pb-10 text-center">
        <h1 className="text-4xl text-white font-bold mb-5">My Portfolio</h1>

        <p className="text-m font-bold text-[#A0522D] mb-6 text-center max-w-2xl mx-auto">
  <Typewriter
    words={[
      "“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”",
    ]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={30}
  />
</p>


        <p className="text-m font-bold text-[#A0522D] mb-4">
          - Ansel Adams
        </p>
      </section>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <PortfolioCard
            key={item.id}
            imageSrc={item.imageSrc}
            eventName={item.eventName}
            eventDate={item.eventDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
