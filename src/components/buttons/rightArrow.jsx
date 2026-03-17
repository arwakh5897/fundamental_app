import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const RightArrow = ({ scrollRef }) => {

  const handleClick = () => {
    if (!scrollRef?.current) return;
    const currentScrollValue = scrollRef.current;
    const maxScroll = currentScrollValue.offsetWidth * 0.8;

    currentScrollValue.scrollBy({ left: maxScroll, behavior: "smooth" });
  };

  return (
   <div className="flex bg-transparent right-1 absolute z-10">
      <button
        onClick={handleClick}
        className="bg-menu-buttons md:p-2 p-1 rounded-full hover:opacity-80"
      >
        <ChevronRightIcon className="md:w-5 md:h-5 w-4 h-4" />
      </button>
    </div>
  );
};

export default RightArrow;