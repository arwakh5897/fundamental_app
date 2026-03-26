import React from "react";

const HamburgerButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="flex flex-col gap-1 md:hidden">
      <span className="h-[2px] w-5 bg-black"></span>
      <span className="h-[2px] w-3 bg-black"></span>
      <span className="h-[2px] w-4 bg-black"></span>
    </button>
  );
};

export default HamburgerButton;