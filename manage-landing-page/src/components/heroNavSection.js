import React from "react";

function heroNavSection() {
  return (
    <div className="px-28 h-screen">
      {/* navigation Bar */}
      <nav className="flex justify-between items-center pt-8 pb-16">
        <span>Logo</span>
        <div>
          <ul className="flex flex-row space-x-8">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
        <button>Get Started</button>
      </nav>
      {/* Hero Section */}
      <div>
        <div>
          <h1>Bring everyone together to build better products</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img scr="*" alt="field of shit"></img>
          <img scr="*" alt="field of shit"></img>
          <img scr="*" alt="field of shit"></img>
        </div>
      </div>
    </div>
  );
}

export default heroNavSection;
