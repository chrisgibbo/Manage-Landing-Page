import React from "react";
import LogoWhite from "./images/logoWhite.svg";
import "./App.css";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const style = { color: "#FAFAFA", fontSize: "1.2em" };

function footer() {
  return (
    <div className="px-28 py-12 flex justify-between font-BeVietnamPro footerBackground">
      {/* Logo + social icons div */}

      <div className="flex flex-col justify-between items-center">
        <div>
          <img src={LogoWhite} alt="MainLogoWhite"></img>
        </div>
        <div className="flex gap-3">
          <a href="*">
            <FaFacebookSquare style={style} />
          </a>
          <a href="*">
            <FaYoutube style={style} />
          </a>
          <a href="*">
            <FaTwitter style={style} />
          </a>
          <a href="*">
            <FaPinterest style={style} />
          </a>
          <a href="*">
            <FaInstagram style={style} />
          </a>
        </div>
      </div>

      {/* footer navlinks div */}

      <div className="flex justify-between gap-44 footerfont text-sm leading-8">
        <div className="">
          <ul className="">
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
