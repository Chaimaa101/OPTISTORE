import { FaCheck } from "react-icons/fa6";

export default function Services() {
  return (
    <div className="container px-4 mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 gap-5 text-stick ">
      <div className="flex flex-col justify-between items-start gap-5">
        <h1 className="text-3xl uppercase font-bold italic">
          A world with style!
        </h1>
        <div className="h-[2.5px] w-1/3 bg-stick"></div>
        <p className="capitalize font-medium text-gray-400 tracking-wide text-base/7">
          Step into a dream with our mesmerizing sunglasses. These whimsical
          frames invite you to embrace a world where style meets fantasy.
          Elevate your gaze and let the dream lenses enchant all your looks.
        </p>
        <ul className="">
          <li className="flex flex-row items-center gap-x-2 tracking-wide text-base/7 font-medium">
            <FaCheck className="text-stick text-lg " />
            Fashionable styles
          </li>
          <li className="flex flex-row items-center gap-x-2 tracking-wide text-base/7 font-medium">
            <FaCheck className="text-stick text-lg " />
            Sustainability
          </li>
          <li className="flex flex-row items-center gap-x-2 tracking-wide text-base/7 font-medium">
            <FaCheck className="text-stick text-lg " />
            Comfort of use
          </li>
          <li className="flex flex-row items-center gap-x-2 tracking-wide text-base/7 font-medium">
            <FaCheck className="text-stick text-lg " />
            Free shipping
          </li>
        </ul>
        <a
          href="#"
          aria-label="View All"
          className="w-full text-center py-2 px-6 uppercase mt-4 tracking-wider  bg-stick text-white active:scale-90 transition-all duration-300"
        >
          View All
        </a>
      </div>
      <div className="rounded-xl overflow-hidden">
        <img
          className="w-full object-cover h-full"
          src="/public/services_img.webp"
          alt=""
        />
      </div>
    </div>
  );
}
