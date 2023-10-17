import React from "react";
import "../App.css";

function HeroButton() {
  return (
    <button
      className="HeroBtn py-3 px-7 text-xs rounded-full font-semibold font-BeVietnamPro hover:opacity-70
    max-md:py-4 max-md:px-8 transition-transform transform hover:scale-105"
    >
      Get Started
    </button>
  );
}

export default HeroButton;
