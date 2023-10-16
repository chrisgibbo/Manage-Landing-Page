import React from "react";
import "../App.css";

function callToAction() {
  return (
    <div
      className="px-28 py-10 flex justify-between items-center brightRedBkGround font-BeVietnamPro
     max-md:flex-col max-md:px-6 max-md:text-center max-md:py-24"
    >
      <div className="w-2/5 max-lg:w-full max-md:mb-10">
        <h2 className="text-white font-medium text-3xl max-md:text-4xl max-md:px-14">
          Simplify how your team works today.
        </h2>
      </div>
      <button className="HeroBtnWhite py-3 px-7 text-xs rounded-full font-semibold hover:opacity-70 max-md:py-4 max-md:px-8">
        Get Started
      </button>
    </div>
  );
}

export default callToAction;
