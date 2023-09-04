import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-cover bg-[center_top] h-screen "
      style={{ backgroundImage: "url(./images/hero_image.png)" }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
