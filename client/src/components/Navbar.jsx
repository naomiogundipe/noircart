import React, { useState } from "react";
import logo from "../../public/noircartlogo.png";
import {
  FaBars,
  FaCartShopping,
  FaHeart,
  FaMagnifyingGlass,
  FaMoon,
  FaSun,
  FaUser,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="sticky bg-[#fff] lg:p-[16px] w-full lg:flex justify-between items-center shadow-sm  shadow-gray-300 sm:hidden flex px-5 sm:px-0">
        <div className="lg:w-40 w-30">
          <img src={logo} alt="NoirCart brand logo" />
        </div>
        <div className="lg:block hidden">
          <ul className="flex gap-8 text-[14px]">
            <li className="group relative transition-all duration-300 cursor-pointer hover:text-[#1e88e5] font-semibold uppercase">
              Home{" "}
              <span className="absolute w-0 h-0.5 bg-[#1e88e5] left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative transition-all duration-300 cursor-pointer hover:text-[#1e88e5] font-semibold uppercase">
              Shop{" "}
              <span className="absolute w-0 h-0.5 bg-[#1e88e5] left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative transition-all duration-300 cursor-pointer hover:text-[#1e88e5] font-semibold uppercase">
              Categories{" "}
              <span className="absolute w-0 h-0.5 bg-[#1e88e5] left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="group relative transition-all duration-300 cursor-pointer hover:text-[#1e88e5] font-semibold uppercase">
              Contact{" "}
              <span className="absolute w-0 h-0.5 bg-[#1e88e5] left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
        </div>
        <div className="lg:flex hidden gap-8 items-center">
          <div className="flex bg-[#f5f5f5] items-center px-4 py-2 rounded-sm shadow-md shadow-gray-700 ">
            <input type="search" className=" outline-0 text-lg" />
            <div className=" bg-black text-white p-2 rounded-lg">
              <FaMagnifyingGlass />
            </div>
          </div>
          <div className="text-2xl text-red-400">
            <FaHeart />
          </div>
          <div className="text-2xl">
            <FaCartShopping />
          </div>
          <div className="text-2xl">
            <FaUser />
          </div>
        </div>
        <div className="text-3xl ">
          <FaBars />
        </div>
      </div>
    </>
  );
};

export default Navbar;
