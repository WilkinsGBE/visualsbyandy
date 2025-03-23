import React from "react";
import { useNavigate } from "react-router-dom";

const PortfolioCard = ({ imageSrc, eventName, eventDate, collectionId }) => {
  const navigate = useNavigate();
  return (
    <div 
    onClick={() => navigate(`/collections/${collectionId}`)}
    className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs mx-auto transition-transform hover:scale-105">
      <img
        src={imageSrc}
        alt={eventName}
        className="w-full h-100 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#A0522D]">{eventName}</h3>
        <p className="text-sm text-gray-500 mt-1">{eventDate}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
