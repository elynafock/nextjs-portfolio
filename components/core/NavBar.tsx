import React from "react";
import NavBarLinks from "./NavBarLinks";
import NavBarTop from "./NavBarTop";

const NavBar = () => {
  return (
    <div className="h-screen">
      <NavBarTop />
      <div className="flex flex-col justify-center h-full">
        <NavBarLinks />
      </div>
    </div>
  );
};

export default NavBar;
