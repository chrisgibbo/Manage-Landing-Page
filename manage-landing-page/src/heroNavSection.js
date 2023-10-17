import React from "react";
import HeroButton from "./components/heroButton";
import Logo from "./images/logo.svg";
import HeroImage from "./images/illustration-intro.svg";
import HamburgerMenu from "./components/hamburgerMenu";

function heroNavSection() {
  return (
    <div className="box-border font-BeVietnamPro">
      {/* navigation Bar */}

      <nav className="flex justify-between items-center pt-10 pb-14 px-28 max-lg:hidden">
        <span>
          <img src={Logo} alt="MainLogo" className="hover:cursor-cell"></img>
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

      {/* mobile menud */}

      <HamburgerMenu />

      {/* Hero Section */}
      <div className="px-28 max-lg:px-6 max-lg:h-screen">
        <div className="flex justify-center max-lg:flex-col-reverse pt-10">
          <div className="flex-col items-center  w-1/2 pt-20 max-lg:w-full max-lg:pt-0 max-lg:text-center">
            <h1 className="text-5xl font-bold darkBlue pb-10 max-lg:pt-6">
              Bring everyone together to build better products.
            </h1>
            <p className="text-sm greyFont pb-10 w-2/3 pr-4 max-lg:w-full max-lg:text-lg">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <HeroButton />
          </div>
          <div className="flex items-center justify-center pl-20 pb-20 max-lg:p-0">
            <img src={HeroImage} alt="MainLogo" className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default heroNavSection;
