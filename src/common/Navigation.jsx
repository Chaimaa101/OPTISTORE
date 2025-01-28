import { useState } from "react";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Navigation = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const clickMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const linkClass =
    "relative inline-block hover:before:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-stick before:transition-all before:duration-300";

  return (
    <nav className="flex flex-row justify-between items-center py-2 px-10 shadow-md">
      {/* Logo */}
      <a href="">
        <img
          className="w-24"
          src="../../public/logo.png"
          alt="logo/OPRISTORE"
        />
      </a>
      {/* Navigation Links */}
      <ul className="flex flex-row gap-x-8 items-center text-lg font-medium text-stick uppercase">
        <li>
          <a className={linkClass} href="">
            Home
          </a>
        </li>
        <li>
          <a className={linkClass} href="">
            About
          </a>
        </li>
        <li>
          <a className={linkClass} href="">
            blogs
          </a>
        </li>
        <li>
          {/* Dropdown for Blogs */}
          <a
            onClick={clickMenu}
            className="relative flex flex-row gap-x-[2px] items-center justify-center hover:before:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-stick before:transition-all before:duration-300"
            href="#"
          >
            shop{" "}
            {menuToggle ? (
              <BiChevronUp size={25} />
            ) : (
              <BiChevronDown size={25} />
            )}
          </a>
          <ul
            className={`${
              menuToggle ? "flex" : "hidden"
            } absolute shadow-md mt-[19px] z-50 bg-white flex flex-col gap-y-2 pl-4 pr-8 py-4`}
          >
            <li>
              <a className={linkClass} href="#">
                Men's Sunglasses
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                Women's Sunglasses
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                Accessories
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                Men's Eyeglasses
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                Women's Eyeglasses
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className={linkClass} href="">
            Contact
          </a>
        </li>
      </ul>
      {/* Icons and Profile */}
      <div className="flex flex-row items-center gap-x-2">
        <ul className="flex gap-x-2">
          <li className="relative">
            {/* Heart Icon with Badge */}
            <div className="absolute -right-[5px] -top-[6px] w-4 h-4 flex items-center justify-center rounded-full bg-stick text-white">
              <span className="text-xs">0</span>
            </div>
            <a href="">
              <BiHeart size={24} />
            </a>
          </li>
          <li className="relative">
            {/* Shopping Bag Icon with Badge */}
            <div className="absolute -right-[5px] -top-[6px] w-4 h-4 flex items-center justify-center rounded-full bg-stick text-white">
              <span className="text-xs">0</span>
            </div>
            <a href="">
              <BiShoppingBag size={24} />
            </a>
          </li>
          <li className="pb-[4px]">
            {/* Flag Image */}
            <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="../../public/flag.jpeg"
                alt="flag/MOROCO"
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
