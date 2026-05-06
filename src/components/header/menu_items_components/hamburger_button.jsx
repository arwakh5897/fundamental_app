import React from "react";
import { Menu } from "lucide-react";

const HamburgerButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="flex w-4 h-4 flex-col gap-1 hover:cursor-pointer lg:hidden">
      <span className="h-[2px] w-5 bg-hamburger"></span>
      <span className="h-[2px] w-3 bg-hamburger"></span>
      <span className="h-[2px] w-4 bg-hamburger"></span>
    </button>
  );
};

export default HamburgerButton;