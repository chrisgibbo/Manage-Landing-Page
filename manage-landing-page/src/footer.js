import React from "react";
import LogoWhite from "./images/logoWhite.svg";
import "./App.css";

function footer() {
  return (
    <div className="px-28 py-12 flex justify-between font-BeVietnamPro footerBackground">
      {/* Logo + social icons div */}

      <div>
        <div>
          <img src={LogoWhite} alt="MainLogoWhite"></img>
        </div>
        <div>
          <img scr="" alt=""></img>
          <img scr="" alt=""></img>
          <img scr="" alt=""></img>
          <img scr="" alt=""></img>
          <img scr="" alt=""></img>
        </div>
      </div>

      {/* footer navlinks div */}

      <div className="flex justify-between gap-32 footerfont">
        <div>
          <ul>
            <li>
              <a href="*">Home</a>
            </li>
            <li>
              <a href="*">Pricing</a>
            </li>
            <li>
              <a href="*">Products</a>
            </li>
            <li>
              <a href="*">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="*">Careers</a>
            </li>
            <li>
              <a href="*">Community</a>
            </li>
            <li>
              <a href="*">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* newsletter signup */}

      <div>
        <form>
          <input type="email" placeholder="Updates in your inbox ..." />
          <button>Go</button>
        </form>
        <p>Copyright 2023 All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default footer;
