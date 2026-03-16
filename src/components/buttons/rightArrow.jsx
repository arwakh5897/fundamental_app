import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const RightArrow = ({ scrollRef }) => {

  const handleClick = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  return (
   <div className="hidden md:flex bg-transparent right-1 absolute z-50">
      <button
        onClick={handleClick}
        className="bg-menu-buttons p-2 rounded-full hover:opacity-80"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default RightArrow;