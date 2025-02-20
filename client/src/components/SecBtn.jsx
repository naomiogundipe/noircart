import React from "react";
import { Link } from "react-router-dom";
const SecBtn = (props) => {
  return (
    <>
      {props.text && (
        <button className="bg-white  text-[#1e88e5] px-6 py-2 text-[18px]  font-bold uppercase rounded-lg shadow-md shadow-black hover:bg-sky-700 hover:text-white hover:scale-[1.1]">
          {props.link && <Link to={props.link}>{props.text}</Link>}
          {props.href && <a href={props.href}>{props.text}</a>}
        </button>
      )}
    </>
  );
};

export default SecBtn;
