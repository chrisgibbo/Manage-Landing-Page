import React from "react";
import "../App.css";

function callToAction() {
  return (
    <div className="px-28 flex justify-between items-center h-44 brightRedBkGround font-BeVietnamPro">
      <div className="w-2/5">
        <h2 className="text-white font-medium text-3xl ">
          Simplify how your team works today.
        </h2>
      </div>
      <button className="HeroBtnWhite py-3 px-7 text-xs rounded-full font-semibold hover:opacity-70">
        Get Started
      </button>
    </div>
  );
}

export default callToAction;
