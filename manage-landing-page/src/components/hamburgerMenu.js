import React from "react";
import Hamburger from "../images/icon-hamburger.svg";
import Logo from "../images/logo.svg";

function hamburgerMenu() {
  return (
    <div className="flex justify-between items-center px-14 pt-10 lg:hidden">
      <span>
        <img src={Logo} alt="MainLogo" className="hover:cursor-cell"></img>
      </span>
      <span>
        <img
          src={Hamburger}
          alt="Hamburger"
          className="hover:cursor-cell"
        ></img>
      </span>
    </div>
  );
}

export default hamburgerMenu;
