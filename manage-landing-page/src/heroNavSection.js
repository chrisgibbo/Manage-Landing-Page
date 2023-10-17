import React from "react";
import NavBarMobile from "./components/navBarMobile";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";

function heroNavSection() {
  return (
    <div className="box-border font-BeVietnamPro">
      <NavBar />
      <NavBarMobile />
      <HeroSection />
    </div>
  );
}

export default heroNavSection;
