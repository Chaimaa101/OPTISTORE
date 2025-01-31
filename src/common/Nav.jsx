// import { useState } from "react";
// import {
//   BiHeart,
//   BiShoppingBag,
//   BiChevronDown,
//   BiChevronUp,
//   BiMenu,
// } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   const [menuToggle, setMenuToggle] = useState(false);
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);

//   const clickMenu = () => {
//     setMenuToggle(!menuToggle);
//   };

//   const toggleHamburger = () => {
//     setHamburgerOpen(!hamburgerOpen);
//   };

//   const ClickCart = () => {
//     setCartOpen(!cartOpen);
//   };

//   const linkClass =
//     "relative inline-block text-lg font-medium text-gray-800 hover:text-black transition-colors duration-300";

//   return (
//     <>
//       <nav className="bg-white shadow-md sticky top-0 z-50">
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex justify-between items-center py-4 px-8 max-w-screen-xl mx-auto">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <img
//               src="/logo.png"
//               alt="OPTISTORE"
//               className="w-[2rem]  md:w-[6rem]"
//             />
//           </Link>

//           {/* Navigation Links */}
//           <ul className="flex space-x-8 items-center">
//             <li>
//               <Link className={linkClass} to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className={linkClass} to="/about">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link className={linkClass} to="/blogs">
//                 Blogs
//               </Link>
//             </li>

//             {/* Dropdown for Shop */}
//             <li className="relative">
//               <a
//                 onClick={clickMenu}
//                 className="flex items-center space-x-2 text-lg font-medium text-gray-800 hover:text-black cursor-pointer transition-colors duration-300"
//               >
//                 <span>Shop</span>
//                 {menuToggle ? (
//                   <BiChevronUp size={20} />
//                 ) : (
//                   <BiChevronDown size={20} />
//                 )}
//               </a>
//               <ul
//                 className={`${
//                   menuToggle
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-4 pointer-events-none"
//                 } absolute mt-4 bg-white shadow-lg rounded-lg w-48 space-y-3 p-4 z-50 transition-all duration-300`}
//               >
//                 <li>
//                   <Link
//                     className="text-gray-700 hover:text-black"
//                     to="/menSunglasses"
//                   >
//                     Men's Sunglasses
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-gray-700 hover:text-black"
//                     to="/womenSunglasses"
//                   >
//                     Women's Sunglasses
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-gray-700 hover:text-black"
//                     to="/accessories"
//                   >
//                     Accessories
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-gray-700 hover:text-black"
//                     to="/meneyeglasses"
//                   >
//                     Men's Eyeglasses
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-gray-700 hover:text-black"
//                     to="/womeneyeglasses"
//                   >
//                     Women's Eyeglasses
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Link className={linkClass} to="/contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           {/* Icons (Wishlist, Cart, Flag) */}
//           <div className="flex items-center space-x-6">
//             <div className="relative">
//               <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-stick text-white text-xs">
//                 <span>0</span>
//               </div>
//               <a href="#">
//                 <BiShoppingBag
//                   size={26}
//                   className="text-gray-800 hover:text-black transition-colors duration-300"
//                 />
//               </a>
//             </div>
//             <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
//               <img
//                 src="/flag.jpeg"
//                 alt="Morocco Flag"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation (Hamburger) */}
//         <div className="md:hidden flex justify-between items-center py-4 px-6">
//           <Link to="/" className="flex items-center">
//             <img src="/logo.png" alt="OPTISTORE" className="w-24" />
//           </Link>
//           <div className="flex items-center space-x-4">
//             {/* Cart Icon */}
//             <div className="relative">
//               <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-stick text-white text-xs">
//                 <span>0</span>
//               </div>
//               <button onClick={ClickCart}>
//                 <BiShoppingBag
//                   size={26}
//                   className="text-gray-800 hover:text-black transition-colors duration-300"
//                 />
//               </button>
//             </div>
//             {/* Hamburger Menu */}
//             <button onClick={toggleHamburger}>
//               <BiMenu size={28} className="text-gray-800" />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <div
//           className={`${
//             hamburgerOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           } fixed inset-0 bg-gray-700 bg-opacity-50 z-40 transition-opacity duration-300`}
//           onClick={toggleHamburger}
//         >
//           <div
//             className="bg-white p-6 absolute top-0 left-0 w-3/4 h-full z-50 transform transition-transform duration-300"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={toggleHamburger}
//               className="text-gray-800 text-3xl"
//             >
//               ×
//             </button>

//             {/* Mobile Menu */}
//             <div className="space-y-8 mt-6">
//               <Link
//                 to="/"
//                 className="block text-xl text-gray-700 hover:text-black"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="block text-xl text-gray-700 hover:text-black"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/blogs"
//                 className="block text-xl text-gray-700 hover:text-black"
//               >
//                 Blogs
//               </Link>

//               {/* Mobile Dropdown for Shop */}
//               <div className="relative">
//                 <button
//                   onClick={clickMenu}
//                   className="flex items-center space-x-2 text-xl text-gray-700 hover:text-black"
//                 >
//                   <span>Shop</span>
//                   {menuToggle ? (
//                     <BiChevronUp size={20} />
//                   ) : (
//                     <BiChevronDown size={20} />
//                   )}
//                 </button>
//                 <div
//                   className={`${
//                     menuToggle ? "block" : "hidden"
//                   } mt-4 space-y-4`}
//                 >
//                   <Link
//                     to="/menSunglasses"
//                     className="block text-gray-700 hover:text-black"
//                   >
//                     Men's Sunglasses
//                   </Link>
//                   <Link
//                     to="/womenSunglasses"
//                     className="block text-gray-700 hover:text-black"
//                   >
//                     Women's Sunglasses
//                   </Link>
//                   <Link
//                     to="/accessories"
//                     className="block text-gray-700 hover:text-black"
//                   >
//                     Accessories
//                   </Link>
//                   <Link
//                     to="/meneyeglasses"
//                     className="block text-gray-700 hover:text-black"
//                   >
//                     Men's Eyeglasses
//                   </Link>
//                   <Link
//                     to="/womeneyeglasses"
//                     className="block text-gray-700 hover:text-black"
//                   >
//                     Women's Eyeglasses
//                   </Link>
//                 </div>
//               </div>

//               <Link
//                 to="/contact"
//                 className="block text-xl text-gray-700 hover:text-black"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div
//         className={`z-[100] absolute ${ClickCart ? "right-0" : "right-full"} `}
//         aria-labelledby="slide-over-title"
//         role="dialog"
//         aria-modal="true"
//       >
//         <div
//           className="fixed inset-0 bg-gray-500/75 transition-opacity"
//           aria-hidden="true"
//         ></div>

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//               <div className="pointer-events-auto w-screen max-w-md">
//                 <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                   <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                     <div className="flex items-start justify-between">
//                       <h2
//                         className="text-lg font-medium text-gray-900"
//                         id="slide-over-title"
//                       >
//                         Shopping cart
//                       </h2>
//                       <div className="ml-3 flex h-7 items-center">
//                         <button
//                           onClick={ClickCart}
//                           type="button"
//                           className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
//                         >
//                           <span className="absolute -inset-0.5"></span>
//                           <span className="sr-only">Close panel</span>
//                           <svg
//                             className="size-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke-width="1.5"
//                             stroke="currentColor"
//                             aria-hidden="true"
//                             data-slot="icon"
//                           >
//                             <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               d="M6 18 18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>

//                     <div className="mt-8">
//                       <div className="flow-root">
//                         <ul
//                           role="list"
//                           className="-my-6 divide-y divide-gray-200"
//                         >
//                           <li className="flex py-6">
//                             <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
//                               <img
//                                 src=""
//                                 alt=""
//                                 className="size-full object-cover"
//                               />
//                             </div>

//                             <div className="ml-4 flex flex-1 flex-col">
//                               <div>
//                                 <div className="flex justify-between text-base font-medium text-gray-900">
//                                   <h3>
//                                     <a href="#">Throwback Hip Bag</a>
//                                   </h3>
//                                   <p className="ml-4">$90.00</p>
//                                 </div>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                   Salmon
//                                 </p>
//                               </div>
//                               <div className="flex flex-1 items-end justify-between text-sm">
//                                 <p className="text-gray-500">Qty 1</p>

//                                 <div className="flex">
//                                   <button
//                                     type="button"
//                                     className="font-medium text-indigo-600 hover:text-indigo-500"
//                                   >
//                                     Remove
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                           <li className="flex py-6">
//                             <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
//                               <img
//                                 src=""
//                                 alt=""
//                                 className="size-full object-cover"
//                               />
//                             </div>

//                             <div className="ml-4 flex flex-1 flex-col">
//                               <div>
//                                 <div className="flex justify-between text-base font-medium text-gray-900">
//                                   <h3>
//                                     <a href="#">Medium Stuff Satchel</a>
//                                   </h3>
//                                   <p className="ml-4">$32.00</p>
//                                 </div>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                   Blue
//                                 </p>
//                               </div>
//                               <div className="flex flex-1 items-end justify-between text-sm">
//                                 <p className="text-gray-500">Qty 1</p>

//                                 <div className="flex">
//                                   <button
//                                     type="button"
//                                     className="font-medium text-indigo-600 hover:text-indigo-500"
//                                   >
//                                     Remove
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                     <div className="flex justify-between text-base font-medium text-gray-900">
//                       <p>Subtotal</p>
//                       <p>$262.00</p>
//                     </div>
//                     <p className="mt-0.5 text-sm text-gray-500">
//                       Shipping and taxes calculated at checkout.
//                     </p>
//                     <div className="mt-6">
//                       <a
//                         href="#"
//                         className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
//                       >
//                         Checkout
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;

import { useState } from "react";
import {
  BiHeart,
  BiShoppingBag,
  BiChevronDown,
  BiChevronUp,
  BiMenu,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuToggle);
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  const linkClass =
    "relative inline-block text-lg font-medium text-gray-800 hover:text-black transition-colors duration-300";

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center py-4 px-8 max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="OPTISTORE"
              className="w-[2rem] md:w-[6rem]"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-8 items-center">
            <li>
              <Link className={linkClass} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={linkClass} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={linkClass} to="/blogs">
                Blogs
              </Link>
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
                  <Link
                    className="text-gray-700 hover:text-black"
                    to="/menSunglasses"
                  >
                    Men's Sunglasses
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 hover:text-black"
                    to="/womenSunglasses"
                  >
                    Women's Sunglasses
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 hover:text-black"
                    to="/accessories"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 hover:text-black"
                    to="/meneyeglasses"
                  >
                    Men's Eyeglasses
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 hover:text-black"
                    to="/womeneyeglasses"
                  >
                    Women's Eyeglasses
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className={linkClass} to="/contact">
                Contact
              </Link>
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
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="OPTISTORE" className="w-24" />
          </Link>
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
              <Link
                to="/"
                className="block text-xl text-gray-700 hover:text-black"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-xl text-gray-700 hover:text-black"
              >
                About
              </Link>
              <Link
                to="/blogs"
                className="block text-xl text-gray-700 hover:text-black"
              >
                Blogs
              </Link>

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
                  <Link
                    to="/menSunglasses"
                    className="block text-gray-700 hover:text-black"
                  >
                    Men's Sunglasses
                  </Link>
                  <Link
                    to="/womenSunglasses"
                    className="block text-gray-700 hover:text-black"
                  >
                    Women's Sunglasses
                  </Link>
                  <Link
                    to="/accessories"
                    className="block text-gray-700 hover:text-black"
                  >
                    Accessories
                  </Link>
                  <Link
                    to="/meneyeglasses"
                    className="block text-gray-700 hover:text-black"
                  >
                    Men's Eyeglasses
                  </Link>
                  <Link
                    to="/womeneyeglasses"
                    className="block text-gray-700 hover:text-black"
                  >
                    Women's Eyeglasses
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                className="block text-xl text-gray-700 hover:text-black"
              >
                Contact
              </Link>
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

        {/* Cart Panel */}
        {/* <div
          className="fixed inset-0 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        > */}
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
                                src="../../public/sunglasses_black_1.jpg"
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
                                  <p className="ml-4">$90.00</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Salmon
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty 1</p>
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                          {/* Example Cart Item */}
                          <li className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src="../../public/sunglasses_black_1.jpg"
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
                                  <p className="ml-4">$90.00</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Salmon
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty 1</p>
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                          {/* Example Cart Item */}
                          <li className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src="../../public/sunglasses_black_1.jpg"
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
                                  <p className="ml-4">$90.00</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Salmon
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty 1</p>
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                          {/* Example Cart Item */}
                          <li className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src="../../public/sunglasses_black_1.jpg"
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
                                  <p className="ml-4">$90.00</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Salmon
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty 1</p>
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                          {/* Example Cart Item */}
                          <li className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src="../../public/sunglasses_black_1.jpg"
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
                                  <p className="ml-4">$90.00</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Salmon
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty 1</p>
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
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
                      <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
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
