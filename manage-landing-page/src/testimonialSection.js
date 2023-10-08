import React from "react";
import HeroButton from "./components/heroButton";
import SimpleSlider from "./components/simpleSlider";
import "./App.css";

function testimonialSection() {
  return (
    <div className="text-center px-28 pt-12 h-screen box-border font-BeVietnamPro">
      <h1 className="text-4xl font-bold darkBlue mb-8">What they've said</h1>
      <SimpleSlider />
      <HeroButton />
    </div>
  );
}

export default testimonialSection;
