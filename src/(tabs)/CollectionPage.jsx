import React from "react";
import { useParams } from "react-router-dom";

const collectionsData = {
  Reconnectedmtl: {
    title: "Reconnected MTL",
    images: [
      "/collections/Reconnected1.jpg",
      "/collections/Reconnected2.jpg",
      "/collections/Reconnected3.jpg",
      "/collections/Reconnected4.jpg",
      "/collections/Reconnected5.jpg",
    ],
  },
  NewBeginnings: {
    title: "New Beginnings",
    images: [
      "/collections/NewBeginnings/beginnings1.jpg",
      "/collections/NewBeginnings/beginnings2.jpg",
      "/collections/NewBeginnings/beginnings3.jpg",
      "/collections/NewBeginnings/beginnings4.jpg",
      "/collections/NewBeginnings/beginnings5.jpg",
    ],
  },
  Gala: {
    title: "New Year, New Blessings",
    images: [
      "/collections/Gala/gala1.jpg",
      "/collections/Gala/gala2.jpg",
      "/collections/Gala/gala3.jpg",
      "/collections/Gala/gala4.jpg",
      "/collections/Gala/gala5.jpg",
    ],
  },
  RenewalMinistry: {
    title: "Renewal Ministry Youth Service",
    images: [
      "/collections/RenewalMinistry/renewal1.jpg",
      "/collections/RenewalMinistry/renewal2.jpg",
      "/collections/RenewalMinistry/renewal3.jpg",
      "/collections/RenewalMinistry/renewal4.jpg",
      "/collections/RenewalMinistry/renewal5.jpg",
    ],
  },
  SabbatJeunesse: {
    title: "Sabbat Jeunesse",
    images: [
      "/collections/SabbatJeunesse/chante1.jpg",
      "/collections/SabbatJeunesse/chante2.jpg",
      "/collections/SabbatJeunesse/chante3.jpg",
      "/collections/SabbatJeunesse/chante4.jpg",
    ],
  },
};

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = collectionsData[collectionId];

  if (!collection) {
    return (
      <div className="text-white text-center p-10">Collection not found</div>
    );
  }

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-4xl text-white text-center font-bold mb-10">
        {collection.title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {collection.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${collection.title} ${index}`}
            className="w-full rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
