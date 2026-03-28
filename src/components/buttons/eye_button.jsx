import React from "react";
import { FaEye } from "react-icons/fa";

const EyeButton = ({ onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="hidden md:flex absolute top-2 right-2 z-10 bg-menu-buttons hover:cursor-pointer backdrop-blur p-2 rounded-full 
                 opacity-0 group-hover:opacity-100 transition duration-200"
    >
      <FaEye size={14} />
    </button>
  );
};

export default EyeButton;