import React from "react";

function openCloseMenu() {
  return (
    <div className="z-10 relative flex justify-center">
      <div className="absolute bg-white w-[90%] mt-5 rounded shadow-lg shadow-slate-500/50">
        <ul className="flex flex-col space-y-4 my-8 text-center max-md:font-medium max-md:space-y-8 max-md:my-14">
          <a href="*" className="hover:text-red-400">
            <li>Pricing</li>
          </a>
          <a href="*" className="hover:text-red-400">
            <li>Product</li>
          </a>
          <a href="*" className="hover:text-red-400">
            <li>About Us</li>
          </a>
          <a href="*" className="hover:text-red-400">
            <li>Careers</li>
          </a>
          <a href="*" className="hover:text-red-400">
            <li>Community</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default openCloseMenu;
