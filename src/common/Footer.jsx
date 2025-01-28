import { useState } from "react";

const Footer = () => {
  const [curentYear, setCurentYear] = useState(new Date().getFullYear());
  return (
    <footer className="h-[40vh] flex flex-col justify-center items-center gap-10 text-stick capitalize">
      <div>
        <img className="max-w-24" src="../../public/logo.png" alt="" />
      </div>
      <ul className="flex gap-5 flex-row justify-center  text-sm font-medium">
        <li>
          <a href="">How we are</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Shipping Policy</a>
        </li>
        <li>
          <a href="">Return Policy</a>
        </li>
      </ul>
      <p className="text-xs">© {curentYear} tiwaleye All rights reserved. </p>
    </footer>
  );
};

export default Footer;
