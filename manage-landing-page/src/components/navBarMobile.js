import React, { useState } from "react";
import OpenCloseMenu from "./openCloseMenu";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
import Logo from "../images/logo.svg";

function NavBarMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-14 pt-10 lg:hidden">
        <span>
          <img
            src={Logo}
            alt="MainLogo"
            className="transition-transform transform hover:scale-105"
          ></img>
        </span>
        <span>
          <button onClick={() => setOpenMenu((prev) => !prev)}>
            <img
              src={openMenu ? Close : Hamburger}
              alt="Hamburger"
              className="hover:cursor-pointer transition-transform transform hover:scale-125"
            ></img>
          </button>
        </span>
      </div>
      {openMenu && <OpenCloseMenu />}
    </>
  );
}

export default NavBarMobile;
