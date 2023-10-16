import React from "react";
import HeroButton from "./components/heroButton";
import SimpleSlider from "./components/simpleSlider";
import "./App.css";

function testimonialSection() {
  return (
    <div className="text-center flex flex-col justify-center pb-12 h-screen font-BeVietnamPro max-md:h-fit max-lg:py-24">
      <div className="mb-16">
        <h1 className="text-4xl font-bold darkBlue pb-20">What they've said</h1>
        <SimpleSlider />
      </div>
      <div>
        <HeroButton />
      </div>
    </div>
  );
}

export default testimonialSection;
