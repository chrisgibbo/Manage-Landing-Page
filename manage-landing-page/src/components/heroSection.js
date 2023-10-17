import React from "react";
import HeroButton from "../components/heroButton";
import HeroImage from "../images/illustration-intro.svg";

function heroSection() {
  return (
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
          <img
            src={HeroImage}
            alt="MainLogo"
            className="transition-transform transform hover:scale-105"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default heroSection;
