import React, { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const LeftArrow = ({ scrollRef }) => {
  const [hidden, setHidden] = useState(true);

  const handleScroll = () => {
    if (!scrollRef?.current) return;
    // Hide arrow if at the start
    setHidden(scrollRef.current.scrollLeft <= 0);
  };

  const leftRef = () => {
    if (!scrollRef?.current) return;
    const currentScrollValue = scrollRef.current;
    const maxScroll = currentScrollValue.offsetWidth * 0.85;
    currentScrollValue.scrollBy({ left: -maxScroll, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll(); // initial check
    if (!scrollRef?.current) return;
    const refCurrent = scrollRef.current;
    refCurrent.addEventListener("scroll", handleScroll);
    return () => refCurrent.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  if (hidden) return null; // hide the arrow when at start

  return (
    <div className="flex bg-transparent left-1 absolute z-10">
      <button
        onClick={leftRef}
        className="bg-buttons hover-bg-buttons lg:p-2 p-1 rounded-full hover:opacity-80"
      >
        <ChevronLeftIcon className="lg:w-5 lg:h-5 w-4 h-4" />
      </button>
    </div>
  );
};

export default LeftArrow;