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
const handleMouseOver = ({ target }) => (target.style.color = "#F25F3A");
const handleMouseOut = ({ target }) => (target.style.color = "#fff");

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
            <FaFacebookSquare
              style={style}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </a>
          <a href="*">
            <FaYoutube
              style={style}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </a>
          <a href="*">
            <FaTwitter
              style={style}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </a>
          <a href="*">
            <FaPinterest
              style={style}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </a>
          <a href="*">
            <FaInstagram
              style={style}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </a>
        </div>
      </div>

      {/* footer navlinks div */}

      <div className="flex justify-between gap-44 footerfont text-sm leading-8">
        <div>
          <ul>
            <li className="hover:text-red-400">
              <a href="*">Home</a>
            </li>
            <li className="hover:text-red-400">
              <a href="*">Pricing</a>
            </li>
            <li className="hover:text-red-400">
              <a href="*">Products</a>
            </li>
            <li className="hover:text-red-400">
              <a href="*">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="hover:text-red-400">
              <a href="*">Careers</a>
            </li>
            <li className="hover:text-red-400">
              <a href="*">Community</a>
            </li>
            <li className="hover:text-red-400">
              <a href="*">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* newsletter signup */}

      <div className="flex flex-col justify-between items-center">
        <form className="">
          <input
            type="email"
            placeholder="Updates in your inbox ..."
            className="rounded-full px-8 py-3 text-xs outline-none"
          />
          <button className="brightRedBkGround rounded-full px-5 py-3 text-xs font-semibold footerfont ml-2 hover:brightness-150">
            Go
          </button>
        </form>
        <p className="greyFont text-xs">Copyright 2023 All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default footer;
