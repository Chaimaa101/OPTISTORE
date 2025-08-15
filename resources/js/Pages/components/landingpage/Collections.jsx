import { useState } from 'react';
import { Link } from "@inertiajs/react";

const Collections = () => {
  const [imageErrors, setImageErrors] = useState({});
  const linkClass = "relative inline-block text-base text-center font-bold uppercase text-white before:bg-white hover:before:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300";

  const collections = [
    {
      title: "Men's Sunglasses",
      image: "/storage/categories/sunglassesMan.jpg",
      path: "mensunglasses",
    
    },
    {
      title: "Women's Sunglasses",
      image: "/storage/categories/woman-sunglasses.jpg",
      path: "womensunglasses",
    },
    {
      title: "Accessories",
      image: "/storage/categories/accessoires.jpg",
      path: "accessories",
     
    },
    {
      title: "Men's Eyeglasses",
      image: "/storage/categories/eyeglassesman.jpg",
      path: "meneyeglasses",
      
    },
    {
      title: "Women's Eyeglasses",
      image: "/storage/categories/eyeglasses.jpg",
      path: "womeneyeglasses",

    },
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="ccontainer mx-auto my-10 text-black">
      {/* Title */}
      <h1 className="text-4xl uppercase font-bold italic text-center my-12">
        Collections List
      </h1>

      {/* Collection Grid */}
      <div className="flex gap-6 items-center justify-center flex-wrap">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center md:w-60 md:h-60 rounded-xl overflow-hidden shadow-lg group transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-gray-100 to-gray-300"
          >
            {/* Image with fallback to icon */}
            {!imageErrors[index] ? (
              <img 
                src={collection.image} 
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={() => handleImageError(index)}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-gray-600">
                <span className="mt-2 text-lg font-semibold text-center px-2">{collection.title}</span>
              </div>
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            {/* Text Link */}
            <Link
              to={collection.path}
              className={`${linkClass} z-10 px-4 py-2 group-hover:scale-105 transition-transform duration-300`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {collection.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;