// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, A11y, Autoplay } from "swiper/modules";

export default function Shoping_landing() {
  const glasses = [
    {
      id: 1,
      img: "/shoping_landing/1.jpg",
      title: "WAYFARRER BROWN LENSES",
      preprice: "299",
      price: "149",
      sold: "50",
    },
    {
      id: 2,
      img: "/shoping_landing/2.jpg",
      title: "HALO DAY AND NIGHT 3EN1",
      preprice: "399",
      price: "149",
      sold: "63",
    },
    {
      id: 3,
      img: "/shoping_landing/3.jpg",
      title: "CAIRO DAY AND NIGHT 3EN1",
      preprice: "299",
      price: "159",
      sold: "47",
    },
    {
      id: 4,
      img: "/shoping_landing/4.jpg",
      title: "SILVA 2EN1 SILVER FRAME",
      preprice: "349",
      price: "149",
      sold: "43",
    },
    {
      id: 5,
      img: "/shoping_landing/5.jpg",
      title: "VIORA TIGRED 2EN1",
      preprice: "150",
      price: "142.5",
      sold: "5",
    },
    {
      id: 6,
      img: "/shoping_landing/6.jpg",
      title: "MOSCOT SAYNO GREY",
      preprice: "200",
      price: "180",
      sold: "10",
    },
    {
      id: 7,
      img: "/shoping_landing/7.jpg",
      title: "GUCCI ARYO TRANS 2EN1 CLIPS",
      preprice: "200",
      price: "100",
      sold: "50",
    },
    {
      id: 8,
      img: "/shoping_landing/8.jpg",
      title: "POLICE CIRKO CLIPS 2EN1",
      preprice: "299",
      price: "254.15",
      sold: "15",
    },
    {
      id: 9,
      img: "/shoping_landing/9.jpg",
      title: "MOSCOT SANYO BLACK",
      preprice: "300",
      price: "270",
      sold: "30",
    },
  ];
  return (
    <div className="container mx-auto my-10 text-stick">
      <h1 className="text-4xl uppercase font-bold italic text-center my-12">
        Bestsellers
      </h1>
      <Swiper
        modules={[Keyboard, Scrollbar, A11y, Autoplay]}
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={30}
        grabCursor={true}
        loop
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Autoplay continues even after user interaction
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        scrollbar={true}
      >
        {glasses.map((item) => (
          <SwiperSlide key={item.id} className="text-center mb-5">
            <div className="relative">
              <span className="absolute bg-cyan-500 right-0 py-1 px-3 text-white font-medium">
                SAVE {item.sold}%
              </span>
              <img className=" w-full" src={item.img} alt="" />
            </div>
            <p className="mt-2 uppercase font-medium text-lg">{item?.title}</p>
            <div className="flex flex-row gap-4 justify-center items-center">
              <p className="line-through text-base">{item?.preprice}DH</p>
              <p className="text-base text-cyan-500">{item?.price}DH</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
