import React from "react";

const PortfolioCard = ({ imageSrc, eventName, eventDate }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs mx-auto transition-transform hover:scale-105">
        <img
          src={imageSrc}
          alt={eventName}
          className="w-full h-60 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{eventName}</h3>
          <p className="text-sm text-gray-500 mt-1">{eventDate}</p>
        </div>
      </div>
    );
  };
  
  export default PortfolioCard;
  