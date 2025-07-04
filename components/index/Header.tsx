import React from "react";
import Contact from "./Contact";

const Header = () => {
  return (
    <header className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-5xl font-bold py-2">Elyna Fock</h1>
        <h2>Software Engineer</h2>
        <p className="py-4">
          Everything will be ok in the end, if it's not ok, it's not the end.
        </p>
        <Contact />
      </div>
      <div className="col-span-1 flex justify-center	items-center	">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="rounded-full	w-36"
        />
      </div>
    </header>
  );
};

export default Header;
