import React from "react";
import NavBarLinks from "./NavBarLinks";
import NavBarTop from "./NavBarTop";

const NavBar = () => {
  return (
    <div className="hidden col-span-1 lg:block h-screen fixed right-0">
      <div className="h-full py-8 px-4 border-l">
        {/* <NavBarTop /> */}
        <NavBarLinks />
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
