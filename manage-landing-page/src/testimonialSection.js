import React from "react";
import HeroButton from "./components/heroButton";
import SimpleSlider from "./components/simpleSlider";
import "./App.css";

function testimonialSection() {
  return (
    <div className="text-center pt-12 h-screen box-border font-BeVietnamPro">
      <div className="mb-14">
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
