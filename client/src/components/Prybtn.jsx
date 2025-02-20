import React from "react";
import { Link } from "react-router-dom";
const Prybtn = (props) => {
  return (
    <>
      {props.text && (
        <button className="bg-[#1e88e5] px-6 py-2 text-[18px] text-white font-bold uppercase rounded-lg shadow-md shadow-black hover:bg-sky-700 hover:scale-[1.1]">
          {props.link && <Link to={props.link}>{props.text}</Link>}
          {props.href && <a href={props.href}>{props.text}</a>}
        </button>
      )}
    </>
  );
};

export default Prybtn;
