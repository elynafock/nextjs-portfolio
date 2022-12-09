import React from "react";
import Header from "../index/Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

const AppLayout = ({ children }: any) => {
  return (
    <main className="font-light grid grid-cols-3">
      <div className="max-w-3xl pt-24 mx-auto col-span-3 px-12 lg:col-span-2 flex flex-col gap-y-4">
        <Header />
        {children}
        <Footer />
      </div>
      <NavBar />
    </main>
  );
};

export default AppLayout;
