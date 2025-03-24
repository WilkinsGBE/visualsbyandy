import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;
const withBase = (path) => `${base}${path}`;

const collectionsData = {
  Reconnectedmtl: {
    title: "Reconnected MTL",
    images: [
      withBase("collections/Reconnected/reconnected1.jpg"),
      withBase("collections/Reconnected/reconnected2.jpg"),
      withBase("collections/Reconnected/reconnected5.jpg"),
      withBase("collections/Reconnected/reconnected4.jpg"),
      withBase("collections/Reconnected/reconnected3.jpg"),
    ],
  },
  NewBeginnings: {
    title: "New Beginnings",
    images: [
      withBase("collections/NewBeginnings/beginnings4.jpg"),
      withBase("collections/NewBeginnings/beginnings2.jpg"),
      withBase("collections/NewBeginnings/beginnings3.jpg"),
      withBase("collections/NewBeginnings/beginnings5.jpg"),
      withBase("collections/NewBeginnings/beginnings1.jpg"),
    ],
  },
  Gala: {
    title: "New Year, New Blessings",
    images: [
      withBase("collections/Gala/gala8.jpg"),
      withBase("collections/Gala/gala2.jpg"),
      withBase("collections/Gala/gala7.jpg"),
      withBase("collections/Gala/gala3.jpg"),
      withBase("collections/Gala/gala5.jpg"),
      withBase("collections/Gala/gala1.jpg"),
      withBase("collections/Gala/gala4.jpg"),
      withBase("collections/Gala/gala6.jpg"),
      withBase("collections/Gala/gala9.jpg"),
    ],
  },
  RenewalMinistry: {
    title: "Renewal Ministry Youth Service",
    images: [
      withBase("collections/RenewalMinistry/renewal5.jpg"),
      withBase("collections/RenewalMinistry/renewal2.jpg"),
      withBase("collections/RenewalMinistry/renewal8.jpg"),
      withBase("collections/RenewalMinistry/renewal6.jpg"),
      withBase("collections/RenewalMinistry/renewal1.jpg"),
      withBase("collections/RenewalMinistry/renewal4.jpg"),
      withBase("collections/RenewalMinistry/renewal7.jpg"),
      withBase("collections/RenewalMinistry/renewal3.jpg"),
    ],
  },
  SabbatJeunesse: {
    title: "Sabbat Jeunesse",
    images: [
      withBase("collections/SabbatJeunesse/chante1.jpg"),
      withBase("collections/SabbatJeunesse/chante2.jpg"),
      withBase("collections/SabbatJeunesse/chante3.jpg"),
      withBase("collections/SabbatJeunesse/chante4.jpg"),
    ],
  },
};

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = collectionsData[collectionId];
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!collection) {
    return (
      <div className="text-white text-center p-10">Collection not found</div>
    );
  }

  const slides = collection.images.map((img) => ({ src: img }));
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black p-6 text-center">
      <h1 className="text-4xl text-white font-bold mb-10">
        {collection.title}
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
            alt={`image ${index}`}
            className="w-full object-contain rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
          />
        ))}
      </div>

      {/* UX indicator */}
      <p className="text-sm text-white mt-6 opacity-60">
        Click any photo to view full screen
      </p>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={photoIndex}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      )}
      <div className="flex justify-center md:justify-start mt-5 sm:mt-10">
        <button
          onClick={() => navigate("/portfolio")}
          className="sm:text-md font-semibold text-[#A0522D] hover:text-white border-2 border-[#A0522D] px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#A0522D]/20"
        >
          ← Back to Portfolio
        </button>
      </div>
    </div>
  );
};

export default CollectionPage;
