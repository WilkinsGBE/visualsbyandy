import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const serviceGroups = [
    {
      title: t("services.packageTitle"),
      services: [
        {
          name: t("services.fullEvent.name"),
          price: t("services.fullEvent.price"),
          features: [
            t("services.fullEvent.features.0"),
            t("services.fullEvent.features.1"),
          ],
        },
        {
          name: t("services.fullEventBTS.name"),
          price: t("services.fullEventBTS.price"),
          features: [
            t("services.fullEventBTS.features.0"),
            t("services.fullEventBTS.features.1"),
          ],
        },
        {
          name: t("services.studio.name"),
          price: t("services.studio.price"),
          features: [
            t("services.studio.features.0"),
            t("services.studio.features.1"),
            t("services.studio.features.2"),
            t("services.studio.features.3"),
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-black to-[#A0522D] text-white py-20 md:py-10">
      {serviceGroups.map((group, idx) => (
        <section
          key={idx}
          className="min-h-[140vh] md:min-h-screen flex flex-col justify-center items-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brown-500 mb-12 text-center">
            {group.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {group.services.map((service, sIdx) => (
              <div
                key={sIdx}
                className="border border-white/20 p-6 rounded-2xl text-center hover:bg-white hover:text-black transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-4xl font-bold text-brown-500 mb-6">{service.price}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="before:content-['•'] before:mr-2">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-3 bg-[#A0522D] hover:bg-[#8B4513] text-white font-semibold text-lg rounded-full transition shadow-[0px_0px_15px_rgba(160,82,45,0.6)] hover:shadow-[0px_0px_25px_rgba(139,69,19,0.8)]">
            <Link to="/contact">{t("services.bookBtn")}</Link>
          </button>
        </section>
      ))}

      {/* Policies Section */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-brown-500 mb-12 text-center">
          {t("services.policies.title")}
        </h3>

        {["booking", "cancel", "delivery", "rights", "responsibilities"].map((sectionKey) => (
          <section key={sectionKey} className="mb-12">
            <h2 className="text-2xl font-semibold text-brown-500 mb-4">
              {t(`services.policies.${sectionKey}.title`)}
            </h2>
            <ol className={`pl-6 text-gray-300 space-y-2 ${sectionKey === "booking" || sectionKey === "cancel" ? "list-decimal" : ""}`}>
              {t(`services.policies.${sectionKey}.items`, { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>
        ))}

        <p className="text-sm text-gray-500 mt-10 text-center">
          {t("services.lastUpdated", { date: "March 2025" })}
        </p>
      </div>
    </div>
  );
};

export default Services;
