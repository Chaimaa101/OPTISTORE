// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";

// export default function Testimonials() {
//   return (
//     <div className="container px-4 mx-auto my-10 text-stick">
//       <h1 className="text-4xl uppercase font-bold italic text-center my-12">
//         Hear from Our Happy Customers
//       </h1>
//       <Swiper
//         // pagination={true}
//         modules={[Pagination]}
//         pagination={{
//           dynamicBullets: true,
//         }}
//         slidesPerView={4}
//         centeredSlides={false}
//         slidesPerGroupSkip={1}
//         spaceBetween={30}
//         grabCursor={true}
//         loop
//         autoplay={{
//           delay: 3000, // Delay between slides in milliseconds
//           disableOnInteraction: false, // Autoplay continues even after user interaction
//         }}
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//         }}
//       >
//         <SwiperSlide>
//           <div className="text-center">
//             <p className="text-lg  font-medium mb-4">
//               "I absolutely love my new sunglasses! The quality is exceptional,
//               and they fit perfectly. The stylish design has already earned me
//               so many compliments. Will definitely be shopping here again!"
//             </p>
//             <p className="text-lg  font-medium">- Sarah L. – New York, USA</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="text-center">
//             <p className="text-lg  font-medium mb-4">
//               "The customer service was excellent, and the delivery was quick.
//               The eyeglasses I purchased were exactly as described and so
//               comfortable. Highly recommend this store!"
//             </p>
//             <p className="text-lg  font-medium">- Ahmed B. – Casablanca, Morocco</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="text-center">
//             <p className="text-lg  font-medium mb-4">
//               "I’ve tried many online stores, but this one stands out for its
//               amazing collection and affordable prices. My new reading glasses
//               are super lightweight and trendy. Couldn't be happier!"
//             </p>
//             <p className="text-lg  font-medium">- Emily R. – London, UK</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="text-center">
//             <p className="text-lg  font-medium mb-4">
//               "This store has a wide variety of styles to choose from, and the
//               virtual try-on feature made it so easy to find the perfect pair.
//               My sunglasses arrived beautifully packaged and on time."
//             </p>
//             <p className="text-lg  font-medium">- Carlos M. – Madrid, Spain</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="text-center">
//             <p className="text-lg  font-medium mb-4">
//               "The attention to detail is incredible. My blue-light blocking
//               glasses are not only functional but stylish too. I wear them every
//               day at work. Thank you for such a great product!"
//             </p>
//             <p className="text-lg  font-medium">- Amina K. – Marrakech, Morocco</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="text-center">
//             <p className="text-lg  font-medium mb-4">
//               "I bought sunglasses for a beach trip, and they were perfect!
//               Stylish, comfortable, and with great UV protection. The staff was
//               also very helpful in answering my questions."
//             </p>
//             <p className="text-lg  font-medium">- Ali Z. – Dubai, UAE</p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  return (
    <div className="container px-4 mx-auto my-10 text-stick text-center">
      <h1 className="text-4xl uppercase font-bold italic text-center my-12">
        Hear from Our Happy Customers
      </h1>
      <Swiper
        className="my-5"
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {/* Testimonial Cards */}
        {[
          {
            quote:
              "I absolutely love my new sunglasses! The quality is exceptional, and they fit perfectly. The stylish design has already earned me so many compliments. Will definitely be shopping here again!",
            name: "Sarah L.",
            location: "New York, USA",
          },
          {
            quote:
              "The customer service was excellent, and the delivery was quick. The eyeglasses I purchased were exactly as described and so comfortable. Highly recommend this store!",
            name: "Ahmed B.",
            location: "Casablanca, Morocco",
          },
          {
            quote:
              "I’ve tried many online stores, but this one stands out for its amazing collection and affordable prices. My new reading glasses are super lightweight and trendy. Couldn't be happier!",
            name: "Emily R.",
            location: "London, UK",
          },
          {
            quote:
              "This store has a wide variety of styles to choose from, and the virtual try-on feature made it so easy to find the perfect pair. My sunglasses arrived beautifully packaged and on time.",
            name: "Carlos M.",
            location: "Madrid, Spain",
          },
        ].map((testimonial, index) => (
          <SwiperSlide key={index} className="my-5">
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
              <p className="text-lg font-medium text-gray-700 mb-6">
                " {testimonial.quote} "
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination"></div>
    </div>
  );
}
