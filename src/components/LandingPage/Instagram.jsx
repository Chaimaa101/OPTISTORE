import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Instagram = () => {
  const slides = [
    { id: 1, image: "../../public/instagram/1.jpg" },
    { id: 2, image: "../../public/instagram/2.jpg" },
    { id: 3, image: "../../public/instagram/3.jpg" },
    { id: 4, image: "../../public/instagram/4.jpg" },
    { id: 5, image: "../../public/instagram/5.jpg" },
    { id: 6, image: "../../public/instagram/6.jpg" },
    { id: 7, image: "../../public/instagram/7.jpg" },
    { id: 8, image: "../../public/instagram/8.jpg" },
    { id: 9, image: "../../public/instagram/9.jpg" },
    { id: 10, image: "../../public/instagram/10.jpg" },
    { id: 11, image: "../../public/instagram/11.jpg" },
    { id: 12, image: "../../public/instagram/12.jpg" },
    { id: 13, image: "../../public/instagram/13.jpg" },
    { id: 14, image: "../../public/instagram/14.jpg" },
    { id: 15, image: "../../public/instagram/15.jpg" },
  ];

  return (
    <div className="container px-4  mx-auto my-10">
      <h1></h1>
      <h1 className="text-4xl uppercase font-bold italic text-center my-12 flex items-center justify-center">
        <span className="font-extrabold text-5xl">#</span>OPTISTORE ON INSTAGRAM
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
