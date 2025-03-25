import React from "react";
import { Link } from "react-router-dom";

const serviceGroups = [
  {
    title: "VisualsByAndy Photography Packages",
    services: [
      {
        name: "Full Event",
        price: "250$",
        features: ["3 hours coverage", "100 photos edited"],
      },
      {
        name: "Full Event + Behind the scene",
        price: "$350",
        features: ["Full coverage", "More than 100 edited photos"],
      },
      {
        name: "Studio Photoshoot",
        price: "200$",
        features: [
          "1 hours",
          "Additional hours are 75$ each",
          "All photos are edited",
          "Premium photo album",
        ],
      },
    ],
  },
];

const Services = () => {
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
          {/* Glowing Button */}
          <button className="mt-6 px-6 py-3 bg-[#A0522D] hover:bg-[#8B4513] text-white font-semibold text-lg rounded-full transition shadow-[0px_0px_15px_rgba(160,82,45,0.6)] hover:shadow-[0px_0px_25px_rgba(139,69,19,0.8)]">
            <Link to="/contact">Reserve your shoot!</Link>
          </button>
        </section>
      ))}

      {/* Policies section */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-brown-500 mb-12 text-center">
          Service Policies
        </h3>

        {/* Booking Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-brown-500 mb-4">
            Booking & Deposits
          </h2>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            <li className="mb-2">
              A non-refundable deposit of 50$ is required to secure your
              booking. The remaining balance is due on the day of the shoot.
            </li>
            <li>Dates are not guaranteed until the deposit is received.</li>
          </ol>
        </section>

        {/* Cancellation Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-brown-500 mb-4">
            Cancellation & Rescheduling
          </h2>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            <li className="mb-2">
              Cancellations must be made at least 72 hours before the scheduled
              shoot to qualify for a reschedule.
            </li>
            <li className="mb-2">
              Deposits are non-refundable, but may be transferred once to a new
              date.
            </li>
            <li>
              If you are behind the appointment time by 15 minutes or more you
              photoshoot get canceled.
            </li>
          </ol>
        </section>

        {/* Turnaround Time */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-brown-500 mb-4">
            Photo Delivery
          </h2>
          <ol className=" pl-6 text-gray-300 ">
            <li>
              Edited photos are delivered within 7–14 business days via a
              private online gallery. Rush delivery is available upon request
              for an additional fee.
            </li>
          </ol>
        </section>

        {/* Usage Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-brown-500 mb-4">
            Usage Rights
          </h2>
          <ol className="pl-6 text-gray-300 ">
            <li>
              VisualsByAndy reserves the right to use photos for portfolio,
              website, and promotional use unless otherwise requested in writing
              by the client.
            </li>
          </ol>
        </section>

        {/* Client Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-brown-500 mb-4">
            Client Responsibilities
          </h2>
          <ol className=" pl-6 text-gray-300">
            <li>
              Clients are expected to arrive on time and be prepared for the
              shoot. Extra charges may apply for delays or location changes not
              discussed in advance.
            </li>
          </ol>
        </section>

        <p className="text-sm text-gray-500 mt-10 text-center">
          Last updated: March 2025
        </p>
      </div>
    </div>
  );
};

export default Services;
