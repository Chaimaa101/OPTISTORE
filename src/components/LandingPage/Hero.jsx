import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Autoplay continues even after user interaction
      }}
      className="w-full h-[85vh]"
    >
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url(../../public/hero/one.webp)" }}
        >
          <div className="absolute bottom-[10%] left-16 flex flex-col gap-6">
            <h1 className="text-white capitalize font-bold text-8xl">
              Optical
            </h1>
            <p className="text-white capitalize font-semibold text-base">
              Clear vision for every moment.
            </p>
            <a
              href="#"
              aria-label="View All"
              className="inline-block w-fit py-2 px-6 font-light uppercase text-black bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-black"
            >
              View All
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url(../../public/hero/three.webp)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-1/4 flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-center tracking-wide text-white md:text-black">
              Just Landed
            </h1>
            <div className="w-10 h-[3px] bg-white md:bg-black"></div>
            <p className="text-lg md:text-xl text-center capitalize text-white">
              Don't miss our latest drops!
            </p>
            <a
              href="#"
              aria-label="Shop Now"
              className="py-2 px-6 font-semibold uppercase text-white bg-black transition-all duration-300 border border-black active:scale-90 hover:bg-white hover:text-black"
            >
              Shop Now
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url(../../public/hero/four.jpg)" }}
        >
          <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2  md:left-[40%] lg:left-1/3 flex flex-col items-center md:items-start gap-4">
            <h1 className="font-normal text-center  md:text-left text-white lg:text-black uppercase tracking-wide text-8xl mb-8">
              WELCOME TO
            </h1>
            <h4 className="font-bold text-white uppercase tracking-wide text-4xl mb-8">
              GLASSES SHOP
            </h4>
            <a
              href="#"
              aria-label="BUY NOW"
              className="py-2 px-6 font-semibold uppercase text-white bg-black transition-all duration-300 border border-black active:scale-90 hover:bg-white hover:text-black"
            >
              BUY NOW{" "}
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url(../../public/hero/five.webp)" }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white capitalize font-semibold text-xl mb-2">
              UP TO 20% OFF SELECTED EYEWEAR
            </p>
            <a
              href="#"
              aria-label="SEAL THE DEAL"
              className="inline-block w-fit py-2 px-6 uppercase text-transparnt bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
            >
              SEAL THE DEAL
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: "url(../../public/hero/two.webp)" }}
        >
          <div className="absolute bottom-[10%] left-16 flex flex-col gap-6">
            <h1 className="text-white capitalize font-bold text-8xl">sun</h1>
            <p className="text-white capitalize font-semibold text-base">
              stay cool and stylish, even in winter.
            </p>
            <a
              href="#"
              aria-label="View All"
              className="inline-block w-fit py-2 px-6 font-light uppercase text-black bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
            >
              View All
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url(../../public/hero/seven.avif)" }}
        >
          <div className="flex flex-col gap-8 absolute  left-10 top-1/2 -translate-y-1/2">
            <p className="text-white capitalize font-semibold text-6xl">
              Expertly crafted, <br /> unexpectedly <br /> affordable
            </p>
            <div className="flex flex-row gap-2 items-center">
              <a
                href="#"
                aria-label="View WOMEN"
                className="inline-block w-fit py-2 px-6 uppercase text-black bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
              >
                SHOP WOMEN
              </a>
              <a
                href="#"
                aria-label="SHOP MEN"
                className="inline-block w-fit py-2 px-6  uppercase text-black bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
              >
                SHOP MEN
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
