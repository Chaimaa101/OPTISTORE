import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [curentYear, setCurentYear] = useState(new Date().getFullYear());
  return (
    <footer className="h-[40vh] flex flex-col justify-center items-center gap-10 text-stick capitalize">
      <div>
        <img className="max-w-24" src="/public/logo.png" alt="" />
      </div>
      <ul className="flex gap-5 flex-row justify-center  text-sm font-medium">
        <li>
          <Link to="/about">How we are</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/shippingpolicy">Shipping Policy</Link>
        </li>
        <li>
          <Link to="/returnpolicy">Return Policy</Link>
        </li>
      </ul>
      <p className="text-xs">© {curentYear} tiwaleye All rights reserved. </p>
    </footer>
  );
};

export default Footer;
