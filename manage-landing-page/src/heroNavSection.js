import React from "react";
import HeroButton from "./components/heroButton";
import Logo from "./images/logo.svg";
import HeroImage from "./images/illustration-intro.svg";

function heroNavSection() {
  return (
    <div className="px-28 h-screen w-screen box-border font-BeVietnamPro">
      {/* navigation Bar */}

      <nav className="flex justify-between items-center pt-8 pb-20">
        <span>
          <img src={Logo} alt="MainLogo"></img>
        </span>
        <div>
          <ul className="darkBlue flex text-xs font-medium space-x-8">
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Community</li>
          </ul>
        </div>
        <HeroButton />
      </nav>

      {/* Hero Section */}

      <div className="flex">
        <div className="w-1/2 pr-20 pt-10">
          <h1 className="text-5xl font-bold pb-10 darkBlue">
            Bring everyone together to build better products.
          </h1>
          <p className="pb-10 text-sm pr-28 greyFont">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <HeroButton />
        </div>
        <div className="flex justify-between items-center w-1/2 ">
          <img src={HeroImage} alt="MainLogo" className="w-11/12"></img>
        </div>
      </div>
    </div>
  );
}

export default heroNavSection;
