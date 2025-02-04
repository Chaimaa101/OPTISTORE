import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [curentYear] = useState(new Date().getFullYear());
  const event = (e) => {
    e.scrollTo(0, 0);
  };
  return (
    <footer className="h-[40vh] flex flex-col justify-center items-center gap-10 text-stick capitalize">
      <div>
        <img className="max-w-24" src="/public/logo.png" alt="" />
      </div>
      <ul className="flex gap-5 flex-row justify-center  text-sm font-medium">
        <li>
          <NavLink onClick={event} to="/about">
            How we are
          </NavLink>
        </li>
        <li>
          <NavLink onClick={event} to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink onClick={event} to="/shippingpolicy">
            Shipping Policy
          </NavLink>
        </li>
        <li>
          <NavLink onClick={event} to="/returnpolicy">
            Return Policy
          </NavLink>
        </li>
      </ul>
      <p className="text-xs">© {curentYear} tiwaleye All rights reserved. </p>
    </footer>
  );
};

export default Footer;
