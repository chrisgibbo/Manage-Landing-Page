import React from "react";
import HeroButton from "./heroButton";

function heroNavSection() {
  return (
    <div className="px-28 h-screen box-border font-BeVietnamPro">
      {/* navigation Bar */}
      <nav className="flex justify-between items-center pt-8 pb-16">
        <span>Logo</span>
        <div>
          <ul className="flex space-x-8">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
        <HeroButton />
      </nav>
      {/* Hero Section */}
      <div className="flex">
        <div className="w-1/2 bg-red-200 pr-28">
          <h1 className="text-5xl font-bold pb-10">
            Bring everyone together to build better products.
          </h1>
          <p className="pb-10 text-sm pr-28">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <HeroButton />
        </div>
        <div className="flex justify-between items-center w-1/2 bg-blue-200">
          <img scr="*" alt="field of shit"></img>
          <img scr="*" alt="field of shit"></img>
          <img scr="*" alt="field of shit"></img>
        </div>
      </div>
    </div>
  );
}

export default heroNavSection;
