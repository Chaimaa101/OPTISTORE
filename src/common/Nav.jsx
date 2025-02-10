import { useState } from "react";
import {
  BiShoppingBag,
  BiChevronDown,
  BiChevronUp,
  BiMenu,
} from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuToggle);
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  const linkClass =
    "relative inline-block text-lg font-medium text-gray-800 hover:text-black transition-colors duration-300";

  const event = (e) => {
    e.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center py-4 px-8 max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link onClick={event} to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="OPTISTORE"
              className="w-[2rem] md:w-[6rem]"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-8 items-center">
            <li>
              <NavLink onClick={event} className={linkClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={event} className={linkClass} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={event} className={linkClass} to="/blogs">
                Blogs
              </NavLink>
            </li>

            {/* Dropdown for Shop */}
            <li className="relative">
              <button
                onClick={toggleMenu}
                className="flex items-center space-x-2 text-lg font-medium text-gray-800 hover:text-black cursor-pointer transition-colors duration-300"
              >
                <span>Shop</span>
                {menuToggle ? (
                  <BiChevronUp size={20} />
                ) : (
                  <BiChevronDown size={20} />
                )}
              </button>
              <ul
                className={`${
                  menuToggle
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                } absolute mt-4 bg-white shadow-lg rounded-lg w-48 space-y-3 p-4 z-50 transition-all duration-300`}
              >
                <li>
                  <NavLink
                    onClick={event}
                    className="text-gray-700 hover:text-black"
                    to="/mensunglasses"
                  >
                    Men&apos;s Sunglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={event}
                    className="text-gray-700 hover:text-black"
                    to="/womensunglasses"
                  >
                    Women&apos;s Sunglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={event}
                    className="text-gray-700 hover:text-black"
                    to="/accessories"
                  >
                    Accessories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={event}
                    className="text-gray-700 hover:text-black"
                    to="/meneyeglasses"
                  >
                    Men&apos;s Eyeglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={event}
                    className="text-gray-700 hover:text-black"
                    to="/womeneyeglasses"
                  >
                    Women&apos;s Eyeglasses
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink onClick={event} className={linkClass} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Icons (Cart, Flag) */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-stick text-white text-xs">
                <span>0</span>
              </div>
              <button onClick={toggleCart}>
                <BiShoppingBag
                  size={26}
                  className="text-gray-800 hover:text-black transition-colors duration-300"
                />
              </button>
            </div>
            <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
              <img
                src="/flag.jpeg"
                alt="Morocco Flag"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation (Hamburger) */}
        <div className="md:hidden flex justify-between items-center py-4 px-6">
          <NavLink to="/" className="flex items-center">
            <img src="/logo.png" alt="OPTISTORE" className="w-24" />
          </NavLink>
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-stick text-white text-xs">
                <span>0</span>
              </div>
              <button onClick={toggleCart}>
                <BiShoppingBag
                  size={26}
                  className="text-gray-800 hover:text-black transition-colors duration-300"
                />
              </button>
            </div>
            {/* Hamburger Menu */}
            <button onClick={toggleHamburger}>
              <BiMenu size={28} className="text-gray-800" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            hamburgerOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } fixed inset-0 bg-gray-700 bg-opacity-50 z-40 transition-opacity duration-300`}
          onClick={toggleHamburger}
        >
          <div
            className="bg-white p-6 absolute top-0 left-0 w-3/4 h-full z-50 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={toggleHamburger}
              className="text-gray-800 text-3xl"
            >
              ×
            </button>

            {/* Mobile Menu */}
            <div className="space-y-8 mt-6">
              <NavLink
                onClick={event}
                to="/"
                className="block text-xl text-gray-700 hover:text-black"
              >
                Home
              </NavLink>
              <NavLink
                onClick={event}
                to="/about"
                className="block text-xl text-gray-700 hover:text-black"
              >
                About
              </NavLink>
              <NavLink
                onClick={event}
                to="/blogs"
                className="block text-xl text-gray-700 hover:text-black"
              >
                Blogs
              </NavLink>

              {/* Mobile Dropdown for Shop */}
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="flex items-center space-x-2 text-xl text-gray-700 hover:text-black"
                >
                  <span>Shop</span>
                  {menuToggle ? (
                    <BiChevronUp size={20} />
                  ) : (
                    <BiChevronDown size={20} />
                  )}
                </button>
                <div
                  className={`${
                    menuToggle ? "block" : "hidden"
                  } mt-4 space-y-4`}
                >
                  <NavLink
                    onClick={event}
                    to="/mensunglasses"
                    className="block text-gray-700 hover:text-black"
                  >
                    Men&apos;s Sunglasses
                  </NavLink>
                  <NavLink
                    onClick={event}
                    to="/womensunglasses"
                    className="block text-gray-700 hover:text-black"
                  >
                    Women&apos;s Sunglasses
                  </NavLink>
                  <NavLink
                    onClick={event}
                    to="/accessories"
                    className="block text-gray-700 hover:text-black"
                  >
                    Accessories
                  </NavLink>
                  <NavLink
                    onClick={event}
                    to="/meneyeglasses"
                    className="block text-gray-700 hover:text-black"
                  >
                    Men&apos;s Eyeglasses
                  </NavLink>
                  <NavLink
                    onClick={event}
                    to="/womeneyeglasses"
                    className="block text-gray-700 hover:text-black"
                  >
                    Women&apos;s Eyeglasses
                  </NavLink>
                </div>
              </div>

              <NavLink
                onClick={event}
                to="/contact"
                className="block text-xl text-gray-700 hover:text-black"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Overlay and Panel */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-labelledby="cart-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          onClick={toggleCart}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col  bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  {/* Cart Header */}
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="cart-title"
                    >
                      Shopping Cart
                    </h2>
                    <button
                      onClick={toggleCart}
                      type="button"
                      className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="absolute -inset-0.5"></span>
                      <span className="sr-only">Close cart</span>
                      <svg
                        className="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Cart Items */}
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {/* Example Cart Item */}
                        <li className="flex py-6">
                          <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src="../../public/data/Eyeglasses_man/1-1.webp"
                              alt=""
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">Throwback Hip Bag</a>
                                </h3>
                                <p className="ml-4">90.00DH</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                Salmon
                              </p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">Qty 1</p>
                              <button
                                type="button"
                                className="font-medium text-stick hover:text-stick/50"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cart Footer */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>262.00DH</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/chekout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Nav;
