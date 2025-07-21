import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "@inertiajs/react";

const slides = [
  {
    backgroundImage: "storage/hero/one.webp",
    content: (
      <div className="absolute bottom-[10%] left-16 flex flex-col gap-6">
        <h1 className="text-white capitalize font-bold text-6xl sm:text-8xl">
          Optical
        </h1>
        <p className="text-white capitalize font-semibold text-base">
          Clear vision for every moment.
        </p>
        <Link
          href="/products/category/3"
          aria-label="View All"
          className="inline-block w-fit py-2 px-6 font-light uppercase text-black bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
        >
          View All
        </Link>
      </div>
    ),
  },
  {
    backgroundImage: "storage/hero/three.webp",
    content: (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-1/4 flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold uppercase text-center tracking-wide text-white md:text-black">
          Just Landed
        </h1>
        <div className="w-10 h-[3px] bg-white md:bg-black"></div>
        <p className="text-lg md:text-xl text-center capitalize text-white">
          Don't miss our latest drops!
        </p>
        <Link
          href="/products/category/2"
          aria-label="Shop Now"
          className="py-2 px-6 font-semibold uppercase text-white bg-black transition-all duration-300 border border-black active:scale-90 hover:bg-white hover:text-black"
        >
          Shop Now
        </Link>
      </div>
    ),
  },
  {
    backgroundImage: "/storage/hero/four.jpg",
    content: (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-[40%] lg:left-1/3 flex flex-col items-center md:items-start gap-4">
        <h1 className="font-normal text-center md:text-left text-white lg:text-black uppercase tracking-wide text-6xl sm:text-8xl mb-8">
          Welcome To
        </h1>
        <h4 className="font-bold text-white uppercase tracking-wide text-4xl mb-8">
          Glasses Shop
        </h4>
        <Link
          href="/products/category/2"
          aria-label="BUY NOW"
          className="py-2 px-6 font-semibold uppercase text-white bg-black transition-all duration-300 border border-black active:scale-90 hover:bg-white hover:text-black"
        >
          Buy Now
        </Link>
      </div>
    ),
  },
  {
    backgroundImage: "/storage/hero/five.webp",
    content: (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white capitalize font-semibold text-xl mb-2">
          UP TO 20% OFF SELECTED EYEWEAR
        </p>
        <Link
          href="/products/category/5"
          aria-label="Seal the Deal"
          className="inline-block w-fit py-2 px-6 uppercase  bg-white text-black/65 rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
        >
          Seal the Deal
        </Link>
      </div>
    ),
  },
  {
    backgroundImage: "/storage/hero/two.webp",
    content: (
      <div className="absolute bottom-[10%] left-16 flex flex-col gap-6">
        <h1 className="text-white capitalize font-bold text-8xl">Sun</h1>
        <p className="text-white capitalize font-semibold text-base">
          Stay cool and stylish, even in winter.
        </p>
        <Link
          href="/products/category/1"
          aria-label="View All"
          className="inline-block w-fit py-2 px-6 font-light uppercase text-black bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
        >
          View All
        </Link>
      </div>
    ),
  },
  {
    backgroundImage: "/storage/hero/seven.avif",
    content: (
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-8">
        <p className="text-white capitalize font-semibold text-5xl sm:text-6xl">
          Expertly crafted, <br /> unexpectedly <br /> affordable
        </p>
        <div className="flex flex-row gap-2 items-center">
          <Link
            href="/products/category/4"
            aria-label="Shop Women"
            className="inline-block w-fit py-2 px-6 uppercase text-black bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
          >
            Shop Women
          </Link>
          <Link
            href="/products/category/3"
            aria-label="Shop Men"
            className="inline-block w-fit py-2 px-6 uppercase text-black bg-white rounded-full transition-all duration-300 border border-white active:scale-90 hover:bg-transparent hover:text-white"
          >
            Shop Men
          </Link>
        </div>
      </div>
    ),
  },
];

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full h-[85vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            {slide.content}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
