import React, { useState } from "react";
import logo from "../../public/noircartlogo.png";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCartShopping,
  FaHeart,
  FaHouse,
  FaMagnifyingGlass,
  FaPersonDress,
  FaPhone,
  FaShop,
  FaUser,
} from "react-icons/fa6";


const SideNav = ({menuOpen,handleMenuOpen}) => {

  return (
    <>
      <div
        className={`${
          menuOpen ? "w-20 gap-37" : "w-50 gap-8"
        } sm:flex flex-col lg:hidden bg-[#fff] p-[16px]  h-full fixed  gap-8 items-start shadow-sm  shadow-gray-300 hidden `}
      >
        <div className={`${
          menuOpen ? "w-0" : "w-50"
        } `}>
          <img src={logo} alt="NoirCart brand logo" />
        </div>
        <div className="flex flex-col-reverse gap-6 items-center w-full ">
          <div className="text-3xl text-red-400">
            <FaHeart />
          </div>
          <div className="text-3xl">
            <FaCartShopping />
          </div>
          <div className="text-3xl">
            <FaUser />
          </div>
        </div>
        <div className={`${
          menuOpen ? "hidden" : "flex"
        }     bg-[#f5f5f5] items-center px-4 py-2 w-full rounded-sm shadow-md shadow-gray-700 `}>
          <input type="search" className=" outline-0 text-lg w-full" />
          <div className=" bg-black text-white p-2 rounded-lg ">
            <FaMagnifyingGlass />
          </div>
        </div>
        <div className="w-full">
          <ul className="flex flex-col gap-8 w-full">
            <li className={`bg-[#1e88e5] w-full p-2 rounded-lg font-semibold shadow-sm shadow-gray-600 text-[#fff] hover:bg-sky-700 `}>
            {
          menuOpen ?  <FaHouse />:"Home" 
        } 
            </li>
            <li className="bg-[#1e88e5] w-full p-2 rounded-lg font-semibold shadow-sm shadow-gray-600 text-[#fff] hover:bg-sky-700 ">
            {
          menuOpen ? <FaShop/> :  "Shop"
        } 
            </li>
            <li className="bg-[#1e88e5] w-full p-2 rounded-lg font-semibold shadow-sm shadow-gray-600 text-[#fff] hover:bg-sky-700 ">
            {
          menuOpen ?  <FaPersonDress/> :"Category"
        } 
            </li>
            <li className="bg-[#1e88e5] w-full p-2 rounded-lg font-semibold shadow-sm shadow-gray-600 text-[#fff] hover:bg-sky-700 ">
            {
          menuOpen ? <FaPhone/> : "Contact"
        } 
            </li>
          </ul>
        </div>
        <div
          onClick={handleMenuOpen}
          className="absolute bg-[#f5f5f5] p-3 right-0 top-30 rounded-tl-full rounded-bl-full text-lg"
        >
          {menuOpen ? (
            <FaAngleRight className="hover:scale-[1.3]" />
          ) : (
            <FaAngleLeft className="hover:scale-[1.3]" />
          )}
        </div>
      </div>
    </>
  );
};

export default SideNav;
