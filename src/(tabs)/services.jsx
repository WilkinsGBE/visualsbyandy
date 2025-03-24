import React from "react";

const serviceGroups = [
  {
    title: "VisualsByAndy Photography Packages",
    services: [
      {
        name: "Full Event (no editing)",
        price: "250$",
        features: [
          "3 hours coverage",
          "professional photographer",
          "100 photos",
        ],
      },
      {
        name: "Full Event (editing)",
        price: "$350",
        features: [
          "6 hours coverage",
          "professional photographers",
          "More than 100 edited photos",
          "Online gallery",
        ],
      },
      {
        name: "Studio Photoshoot",
        price: "200$",
        features: [
          "1 hours",
          "Additional hours are 75$ each",
          "200+ edited photos",
          "Premium photo album",
        ],
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-black via-black to-[#A0522D] text-white">
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
                <p className="text-4xl font-bold text-brown-500 mb-6">
                  {service.price}
                </p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="before:content-['•'] before:mr-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
