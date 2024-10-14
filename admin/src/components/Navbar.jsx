import React from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between bg-white">
      <img className="w-[max(20%,80px)]" src={assets.logo2} alt="" />
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-xs">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
