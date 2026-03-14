import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ArrowButtons = ({ sliderRef }) => {
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -440, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 440, behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:flex gap-2 mr-4">
      <button
        onClick={scrollLeft}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <ChevronLeftIcon className="h-3 w-3 text-gray-700" />
      </button>

      <button
        onClick={scrollRight}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <ChevronRightIcon className="h-3 w-3 text-gray-700" />
      </button>
    </div>
  );
};

export default ArrowButtons;
