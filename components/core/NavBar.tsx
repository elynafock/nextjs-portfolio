import React from "react";
import NavBarLinks from "./NavBarLinks";
import NavBarTop from "./NavBarTop";

const NavBar = () => {
  return (
    <div className="w-full h-full grid grid-rows-3">
      <NavBarTop />
      <NavBarLinks />
      <div></div>
    </div>
  );
};

export default NavBar;
