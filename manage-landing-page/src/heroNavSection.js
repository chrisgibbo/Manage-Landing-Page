import React from "react";
import HeroButton from "./components/heroButton";
import Logo from "./images/logo.svg";
import HeroImage from "./images/illustration-intro.svg";

function heroNavSection() {
  return (
    <div className="box-border font-BeVietnamPro">
      {/* navigation Bar */}

      <nav className="flex justify-between items-center pt-6 pb-14 px-28">
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
      <div className="px-28 h-screen bg-red-200">
        {/* Hero Section */}

        <div className="flex bg-yellow-200">
          <div className="bg-red-400 w-1/2">
            <h1 className="text-5xl font-bold  darkBlue">
              Bring everyone together to build better products.
            </h1>
            <p className="text-sm greyFont">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <HeroButton />
          </div>
          <div className="flex justify-between items-center bg-blue-200 ">
            <img src={HeroImage} alt="MainLogo" className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default heroNavSection;
