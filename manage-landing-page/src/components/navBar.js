import React from "react";
import Logo from "../images/logo.svg";
import HeroButton from "../components/heroButton";

function navBar() {
  return (
    <nav className="flex justify-between items-center pt-10 pb-14 px-28 max-lg:hidden">
      <span>
        <img
          src={Logo}
          alt="MainLogo"
          className="hover:cursor-cell transition-transform transform hover:scale-105"
        ></img>
      </span>
      <div>
        <ul className="darkBlue flex text-xs font-medium space-x-8 ">
          <li className="cursor-pointer hover:text-slate-400">Pricing</li>
          <li className="cursor-pointer hover:text-slate-400">Product</li>
          <li className="cursor-pointer hover:text-slate-400">About Us</li>
          <li className="cursor-pointer hover:text-slate-400">Careers</li>
          <li className="cursor-pointer hover:text-slate-400">Community</li>
        </ul>
      </div>
      <HeroButton />
    </nav>
  );
}

export default navBar;
