import React from "react";
import { Typewriter } from "react-simple-typewriter";
import PortfolioCard from "../../components/PortfolioCard";
import { useTranslation } from "react-i18next";

const base = import.meta.env.BASE_URL;

const portfolioItems = [
  {
    imageSrc: `${base}collections/Reconnected/reconnected1.jpg`,
    eventNameKey: "portfolio.reconnected",
    eventDateKey: "portfolio.reconnectedDate",
    collectionId: "Reconnectedmtl",
  },
  {
    imageSrc: `${base}collections/Gala/gala8.jpg`,
    eventNameKey: "portfolio.nyblessings",
    eventDateKey: "portfolio.nyblessingsDate",
    collectionId: "Gala",
  },
  {
    imageSrc: `${base}collections/SabbatJeunesse/chante4.jpg`,
    eventNameKey: "portfolio.praiseworship",
    eventDateKey: "portfolio.praiseworshipDate",
    collectionId: "SabbatJeunesse",
  },
  {
    imageSrc: `${base}collections/NewBeginnings/beginnings2.jpg`,
    eventNameKey: "portfolio.newbeginnings",
    eventDateKey: "portfolio.newbeginningsDate",
    collectionId: "NewBeginnings",
  },
  {
    imageSrc: `${base}collections/RenewalMinistry/renewal2.jpg`,
    eventNameKey: "portfolio.salemyouth",
    eventDateKey: "portfolio.salemyouthDate",
    collectionId: "RenewalMinistry",
  },
];

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-black to-[#A0522D] px-6 py-12 flex flex-col justify-start items-center text-center">
      <section className="pt-16 pb-10 text-center">
        <h1 className="text-4xl text-white font-bold mb-5">{t("portfolio.title")}</h1>

        <p className="text-m font-bold text-[#A0522D] mb-6 text-center max-w-2xl mx-auto">
          <Typewriter
            words={[t("portfolio.quote")]}
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
            eventName={t(item.eventNameKey)}
            eventDate={t(item.eventDateKey)}
            collectionId={item.collectionId}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
