import React from "react";
import bgimage from "../../assets/images/heroimage.jpg";
import Prybtn from "../Prybtn";
import SecBtn from "../SecBtn";

const Hero = ({ menuOpen }) => {
  return (
    <>
      <div
        className={`h-[500px] flex sm:justify-center sm:items-end justify-end items-center bg-cover bg-top pe-7 pb-5 sm:pb-0 flex-col gap-6  lg:ms-0 ${
          menuOpen ? "sm:ms-20" : "sm:ms-50"
        } `}
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <h1
          className={`lg:text-[5rem] sm:text-gray-300 font-bold opacity-80 lg:mt-15 text-center text-black text-4xl  ${
            menuOpen ? "sm:text-5xl sm:-mt-10 " : "sm:text-4xl sm:-mt-15"
          } `}
        >
          Sales Happening now!!
        </h1>
        <div className="flex gap-6">
          <Prybtn text={"Shop Now"} link={"/shop"} />
          <SecBtn text={"SignUp"} link={"/signup"} />
        </div>
      </div>
    </>
  );
};

export default Hero;
