import React from "react";
import Header from "../index/Header";
import NavBar from "./NavBar";

const AppLayout = ({ children }: any) => {
  return (
    <main className="font-light grid grid-cols-3">
      <div className="max-w-3xl pt-12 mx-auto col-span-3 px-12 lg:col-span-2">
        <Header />
        {children}
      </div>
      <div className="hidden pt-12 bg-gray-50 col-span-1 px-12 lg:block">
        <NavBar />
      </div>
    </main>
  );
};

export default AppLayout;
