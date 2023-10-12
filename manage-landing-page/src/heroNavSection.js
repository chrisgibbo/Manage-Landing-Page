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
      {/* Hero Section */}
      <div className="flex px-28 h-screen ">
        <div className="flex justify-center ">
          <div className=" flex-col items-center  w-1/2 pt-20">
            <h1 className="text-5xl font-bold darkBlue pb-10">
              Bring everyone together to build better products.
            </h1>
            <p className="text-sm greyFont pb-10 w-2/3 pr-4">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <HeroButton />
          </div>
          <div className="flex items-center pl-20 pb-20">
            <img src={HeroImage} alt="MainLogo" className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default heroNavSection;
