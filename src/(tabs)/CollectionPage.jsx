import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
      "/collections/Gala/gala6.jpg",
      "/collections/Gala/gala7.jpg",
      "/collections/Gala/gala8.jpg",
      "/collections/Gala/gala9.jpg",
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
      "/collections/RenewalMinistry/renewal6.jpg",
      "/collections/RenewalMinistry/renewal7.jpg",
      "/collections/RenewalMinistry/renewal8.jpg",
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
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!collection) {
    return (
      <div className="text-white text-center p-10">Collection not found</div>
    );
  }

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="bg-black min-h-screen p-6 text-center">
      <h1 className="text-4xl text-white font-bold mb-10">
        {collection.title}
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => openLightbox(index)}
            alt={`image ${index}`}
            className="w-full h-72 object-cover rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
          />
        ))}
      </div>

      {/* UX indicator */}
      <p className="text-sm text-white mt-6 opacity-60">
        Click any photo to view full screen
      </p>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={collection.images[photoIndex]}
          nextSrc={
            collection.images[(photoIndex + 1) % collection.images.length]
          }
          prevSrc={
            collection.images[
              (photoIndex + collection.images.length - 1) %
                collection.images.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + collection.images.length - 1) %
                collection.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % collection.images.length)
          }
        />
      )}
    </div>
  );
};

export default CollectionPage;
