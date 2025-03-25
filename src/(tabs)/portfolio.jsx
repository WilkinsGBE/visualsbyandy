import React from "react";
import { Typewriter } from "react-simple-typewriter";
import PortfolioCard from "../../components/PortfolioCard";

const base = import.meta.env.BASE_URL;

const portfolioItems = [
  {
    imageSrc: `${base}collections/Gala/gala8.jpg`,
    eventName: "New Year, New Blessings",
    eventDate: "December 29 2024",
    collectionId: "Gala",
  },
  {
    imageSrc: `${base}collections/NewBeginnings/beginnings2.jpg`,
    eventName: "New Beginnings",
    eventDate: "December 14 2024",
    collectionId: "NewBeginnings",
  },
  {
    imageSrc: `${base}collections/SabbatJeunesse/chante4.jpg`,
    eventName: "Praise Worship",
    eventDate: "December 21 2024",
    collectionId: "SabbatJeunesse",
  },
  {
    imageSrc: `${base}collections/Reconnected/reconnected1.jpg`,
    eventName: "Reconnected MTL",
    eventDate: "March 1st 2025",
    collectionId: "Reconnectedmtl",
  },
  {
    imageSrc: `${base}collections/RenewalMinistry/renewal2.jpg`,
    eventName: "Salem Youth Service",
    eventDate: "October 5 2024",
    collectionId: "RenewalMinistry",
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

        <p className="text-m font-bold text-[#A0522D] mb-4">- Ansel Adams</p>
      </section>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <PortfolioCard
            key={item.collectionId}
            imageSrc={item.imageSrc}
            eventName={item.eventName}
            eventDate={item.eventDate}
            collectionId={item.collectionId}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
