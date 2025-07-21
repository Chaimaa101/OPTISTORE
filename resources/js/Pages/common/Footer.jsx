import { Link } from "@inertiajs/react";
import { useState } from "react";


const Footer = () => {
  const [curentYear] = useState(new Date().getFullYear());
  const event = (e) => {
    e.scrollTo(0, 0);
  };
  return (
    <footer className="my-10 flex flex-col justify-center items-center gap-5 sm:gap-10 text-stick capitalize px-4">
      <div>
        <img className="max-w-24" src="/logo.png" alt="" />
      </div>
      <ul className="flex gap-3 flex-col items-center justify-center  text-sm font-medium sm:flex-row sm:gap-5">
        <li>
          <Link onClick={event} to="/about">
            How we are
          </Link>
        </li>
        <li>
          <Link onClick={event} to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link onClick={event} to="/shippingpolicy">
            Shipping Policy
          </Link>
        </li>
        <li>
          <Link onClick={event} to="/returnpolicy">
            Return Policy
          </Link>
        </li>
      </ul>
      <p className="text-xs text-center">
        © {curentYear} tiwaleye All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
