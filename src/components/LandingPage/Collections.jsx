const Collections = () => {
  const linkClass =
    "relative inline-block text-base text-center font-bold uppercase text-white before:bg-white hover:before:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-stick before:transition-all before:duration-300";

  return (
    <div className="container mx-auto my-10 text-stick">
      {/* Title */}
      <h1 className="text-4xl uppercase font-bold italic text-center my-12">
        Collections List
      </h1>

      {/* Collection Grid */}
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {/* Collection Card */}
        {[
          {
            title: "Men's Sunglasses",
            image: "../../categories/sunglassesMan.jpg",
          },
          {
            title: "Women's Sunglasses",
            image: "../../categories/woman-sunglasses.jpg",
          },
          {
            title: "Accessories",
            image: "../../categories/accessoires.jpg",
          },
          {
            title: "Men's Eyeglasses",
            image: "../../categories/eyeglassesman.jpg",
          },
          {
            title: "Women's eyeglasses",
            image: "../../categories/eyeglasses.jpg",
          },
        ].map((collection, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center w-60 h-60 md:w-52 md:h-52 bg-cover bg-center rounded-xl overflow-hidden shadow-lg group transform  hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${collection.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
            {/* Text */}
            <a href="#"
              className={`${linkClass} z-10 group-hover:scale-105 transition-transform duration-300`}
            >
              {collection.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
