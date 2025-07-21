import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Instagram = () => {
  const slides = [
    { id: 1, image: "/storage/instagram/1.jpg" },

    { id: 3, image: "/storage/instagram/3.jpg" },
    { id: 4, image: "/storage/instagram/4.jpg" },
    { id: 5, image: "/storage/instagram/5.jpg" },

    { id: 8, image: "/storage/instagram/8.jpg" },
    { id: 9, image: "/storage/instagram/9.jpg" },
    { id: 10, image: "/storage/instagram/10.jpg" },
    { id: 11, image: "/storage/instagram/11.jpg" },
    { id: 13, image: "/storage/instagram/13.jpg" },
    { id: 14, image: "/storage/instagram/14.jpg" },
    { id: 15, image: "/storage/instagram/15.jpg" },
  ];

  return (
    <div className="container px-4  mx-auto my-10">
      <h1 className="text-4xl uppercase font-bold italic text-center my-12 flex items-center justify-center">
        #OPTISTORE ON INSTAGRAM
      </h1>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        loop={true}
        className=""
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="">
            <div className="h-72 md:h-60  lg:h-72 overflow-hidden ">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Instagram;
