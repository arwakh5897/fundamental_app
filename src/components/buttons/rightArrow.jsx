import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const RightArrow = ({ scrollRef }) => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    if (!scrollRef?.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
    // Show arrow only if there's more content to the right
    setHidden(scrollLeft + offsetWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    if (!scrollRef?.current) return;
    const refCurrent = scrollRef.current;

    // Wait for DOM to render
    const timer = setTimeout(handleScroll, 50);

    refCurrent.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // recalc on resize

    return () => {
      refCurrent.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, [scrollRef]);

  const RightRef = () => {
    if (!scrollRef?.current) return;
    const maxScroll = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({ left: maxScroll, behavior: "smooth" });
  };

  if (hidden) return null;

  return (
    <div className="flex bg-transparent right-1 absolute z-10">
      <button
        onClick={RightRef}
        className="bg-buttons hover-bg-buttons lg:p-2 p-1 rounded-full hover:opacity-80"
      >
        <ChevronRightIcon className="lg:w-5 lg:h-5 w-4 h-4" />
      </button>
    </div>
  );
};

export default RightArrow;