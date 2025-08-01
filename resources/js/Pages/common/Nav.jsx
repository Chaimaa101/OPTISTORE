import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
    BiShoppingBag,
    BiChevronDown,
    BiChevronUp,
    BiMenu,
    BiUser,
} from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { router, usePage } from "@inertiajs/react";

const Nav = () => {
    const { auth, component, cartItems = [] } = usePage().props;
    const [menuToggle, setMenuToggle] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const toggleMenu = () => setMenuToggle(!menuToggle);
    const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);
    const toggleCart = () => setCartOpen(!cartOpen);
    const toggleUserProfile = () => setShowUserProfile(!showUserProfile);

    const handleLogout = () => {
        setShowLogoutConfirm(true);
        setShowUserProfile(false);
    };

    const confirmLogout = () => {
        router.post("/logout");
    };

    const cancelLogout = () => {
        setShowLogoutConfirm(false);
    };
    const subtotal =
        cartItems?.reduce((total, item) => {
            return total + (item.product.price || 0) * (item?.quantity || 0);
        }, 0) || 0;

    const linkClass =
        "relative inline-block text-lg font-medium text-gray-800 hover:text-black transition-colors duration-300";

    // Determine if we should show cart or flag
    const showCart = component !== "HomePage";
    const showFlag = !auth.user; // Hide flag when user is logged in

    const UserProfile = () => {
        const user = auth.user;
        return (
            <div className="absolute py-4 px-4 top-[68px] right-4 bg-gray-200 z-20 border-2 border-gray-300 rounded-md">
                <div className="border-b pb-3 border-gray-300">
                    <p className="font-bold text-gray-800">
                        {user.firstname} {user.lastname}
                    </p>
                    <small className="font-semibold text-gray-600">
                        {user.email}
                    </small>
                </div>
                <Link
                    href="/profile"
                    className="flex justify-left items-center gap-1 text-blue-500 mt-2"
                >
                    Settings
                </Link>
                <button
                    onClick={handleLogout}
                    className="flex justify-left items-center gap-1 text-red-500 mt-2"
                >
                    Logout
                    <HiOutlineLogout size={15} style={{ marginTop: "4px" }} />
                </button>
            </div>
        );
    };

    const LogoutConfirmationModal = () => {
        return (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-[1000]">
                <div className="bg-gray-200 py-4 px-8 rounded-lg shadow-lg z-[10000]">
                    <h2 className="text-lg font-bold mb-4 text-gray-800">
                        Confirm logout
                    </h2>
                    <hr className="border-gray-300" />
                    <p className="text-gray-800 py-2">
                        Are you sure you want to log out?
                    </p>
                    <div className="flex justify-end mt-4">
                        <button
                            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={confirmLogout}
                        >
                            Yes
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            onClick={cancelLogout}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 z-50">
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center py-4 px-8 max-w-screen-xl mx-auto">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/storage/logo.png"
                            alt="OPTISTORE"
                            className="w-[2rem] md:w-[6rem]"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex space-x-8 items-center">
                        {!auth.user && (
                            <>
                                <li>
                                    <Link href="/" className={linkClass}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className={linkClass}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className={linkClass}>
                                        Blogs
                                    </Link>
                                </li>
                            </>
                        )}

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
                                        href="/products/category/1"
                                        className="text-gray-700 hover:text-black"
                                    >
                                        Men&apos;s Sunglasses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products/category/2"
                                        className="text-gray-700 hover:text-black"
                                    >
                                        Women&apos;s Sunglasses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products/category/5"
                                        className="text-gray-700 hover:text-black"
                                    >
                                        Accessories
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products/category/3"
                                        className="text-gray-700 hover:text-black"
                                    >
                                        Men&apos;s Eyeglasses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products/category/4"
                                        className="text-gray-700 hover:text-black"
                                    >
                                        Women&apos;s Eyeglasses
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/contact" className={linkClass}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Icons (Cart, Flag) */}
                    <div className="flex items-center space-x-3">
                        {auth.user ? (
                            <div className="relative">
                                <button
                                    onClick={toggleUserProfile}
                                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center rounded-full cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all shadow-md"
                                >
                                    <span className="font-semibold text-lg text-white">
                                        {auth.user.firstname
                                            .charAt(0)
                                            .toUpperCase()}
                                        {auth.user.lastname
                                            .charAt(0)
                                            .toUpperCase()}
                                    </span>
                                </button>
                                {showUserProfile && <UserProfile />}
                            </div>
                        ) : (
                            <div className="mb-1">
                                <Link href="/login">
                                    <BiUser
                                        size={26}
                                        className="text-gray-800 hover:text-black transition-colors duration-300"
                                    />
                                </Link>
                            </div>
                        )}

                        {showCart && (
                            <div className="relative">
                                <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-xs">
                                    <span>{cartItems?.length || 0}</span>
                                </div>
                                <button onClick={toggleCart}>
                                    <BiShoppingBag
                                        size={26}
                                        className="text-gray-800 hover:text-black transition-colors duration-300"
                                    />
                                </button>
                            </div>
                        )}

                        {showFlag && (
                            <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 mb-1">
                                <img
                                    src="/storage/flag.jpeg"
                                    alt="Morocco Flag"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex justify-between items-center py-4 px-6">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/storage/logo.png"
                            alt="OPTISTORE"
                            className="w-24"
                        />
                    </Link>
                    <div className="flex items-center space-x-4">
                        {auth.user ? (
                            <div className="relative">
                                <button
                                    onClick={toggleUserProfile}
                                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center rounded-full cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all shadow-md"
                                >
                                    <span className="font-semibold text-lg text-white">
                                        {auth.user.firstname
                                            .charAt(0)
                                            .toUpperCase()}
                                        {auth.user.lastname
                                            .charAt(0)
                                            .toUpperCase()}
                                    </span>
                                </button>
                                {showUserProfile && <UserProfile />}
                            </div>
                        ) : (
                            <div className="mb-1">
                                <Link href="/login">
                                    <BiUser
                                        size={26}
                                        className="text-gray-800 hover:text-black transition-colors duration-300"
                                    />
                                </Link>
                            </div>
                        )}

                        {showCart && (
                            <div className="relative">
                                <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white text-xs">
                                    <span>{cartItems.length}</span>
                                </div>
                                <button onClick={toggleCart}>
                                    <BiShoppingBag
                                        size={26}
                                        className="text-gray-800 hover:text-black transition-colors duration-300"
                                    />
                                </button>
                            </div>
                        )}

                        <button onClick={toggleHamburger}>
                            <BiMenu size={32} className="text-gray-800" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {hamburgerOpen && (
                    <div className="md:hidden fixed inset-0 bg-gray-700 bg-opacity-50 z-40">
                        <div className="bg-white p-6 absolute top-0 left-0 w-3/4 h-full z-50">
                            <button
                                onClick={toggleHamburger}
                                className="text-gray-800 text-3xl"
                            >
                                ×
                            </button>
                            <div className="space-y-8 mt-6">
                                {!auth.user && (
                                    <>
                                        <Link
                                            href="/"
                                            className="block text-xl text-gray-700 hover:text-black"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            href="/about"
                                            className="block text-xl text-gray-700 hover:text-black"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            href="/blogs"
                                            className="block text-xl text-gray-700 hover:text-black"
                                        >
                                            Blogs
                                        </Link>
                                    </>
                                )}

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
                                    {menuToggle && (
                                        <div className="mt-4 space-y-4">
                                            <Link
                                                href="/products/category/1"
                                                className="text-gray-700 hover:text-black"
                                            >
                                                Men&apos;s Sunglasses
                                            </Link>

                                            <Link
                                                href="/products/category/2"
                                                className="text-gray-700 hover:text-black"
                                            >
                                                Women&apos;s Sunglasses
                                            </Link>

                                            <Link
                                                href="/products/category/5"
                                                className="text-gray-700 hover:text-black"
                                            >
                                                Accessories
                                            </Link>

                                            <Link
                                                href="/products/category/3"
                                                className="text-gray-700 hover:text-black"
                                            >
                                                Men&apos;s Eyeglasses
                                            </Link>

                                            <Link
                                                href="/products/category/4"
                                                className="text-gray-700 hover:text-black"
                                            >
                                                Women&apos;s Eyeglasses
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <Link
                                    href="/contact"
                                    className="block text-xl text-gray-700 hover:text-black"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
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
                                            <span className="sr-only">
                                                Close cart
                                            </span>
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

                                    {/* Cart Items */}
                                    <div className="mt-8">
                                        <div className="flow-root">
                                            {cartItems.length === 0 ? (
                                                <p className="text-gray-500">
                                                    Your cart is empty
                                                </p>
                                            ) : (
                                                <ul
                                                    role="list"
                                                    className="-my-6 divide-y divide-gray-200"
                                                >
                                                    {cartItems.map((item) => (
                                                        <li
                                                            key={item.id}
                                                            className="flex py-6"
                                                        >
                                                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                {item.product
                                                                    .images ? (
                                                                    <img
                                                                        src={`/${item?.product?.images[0]?.images[0]}`}
                                                                        alt={
                                                                            item
                                                                                .product
                                                                                .title
                                                                        }
                                                                        className="size-full object-cover object-center"
                                                                    />
                                                                ) : (
                                                                    <div className="size-full bg-gray-200 flex items-center justify-center">
                                                                        <span className="text-gray-500">
                                                                            No
                                                                            image
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <Link
                                                                                href={`/products/${item.product.id}`}
                                                                            >
                                                                                {
                                                                                    item
                                                                                        .product
                                                                                        .title
                                                                                }
                                                                            </Link>
                                                                        </h3>
                                                                        <p className="ml-4">
                                                                            {item.product.price}
                                                                            DH
                                                                        </p>
                                                                    </div>
                                                                    {item
                                                                        .product
                                                                        .category && (
                                                                        <p className="mt-1 text-sm text-gray-500">
                                                                            {
                                                                                item
                                                                                    .product
                                                                                    .category
                                                                                    .name
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">
                                                                        Qty{" "}
                                                                        {
                                                                            item.quantity
                                                                        }
                                                                    </p>
                                                                    <Link
                                                                        as="button"
                                                                        method="delete"
                                                                        href={`/carts/${item.id}`}
                                                                        className="font-medium text-black hover:text-black/50 transition-colors duration-200"
                                                                    >
                                                                        Remove
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {cartItems.length > 0 && (
                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>{subtotal.toFixed(2)}DH</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">
                                            Shipping and taxes calculated at
                                            checkout.
                                        </p>
                                        <div className="mt-6">
                                            <Link
                                                href="/checkout"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800"
                                            >
                                                Checkout
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Logout Confirmation Modal */}
            {showLogoutConfirm && <LogoutConfirmationModal />}
        </>
    );
};

export default Nav;
