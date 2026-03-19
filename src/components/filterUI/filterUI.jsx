import React, { useState, useRef, useEffect } from "react";

const FilterUI = ({ sortType, setSortType }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const buttons = [
    { label: "Default", value: "default" },
    { label: "Best Selling", value: "bestSelling" },
    { label: "Alphabetically: A-Z", value: "a-z" },
    { label: "Price: Low to High", value: "price-low-high" },
    { label: "Price: High to Low", value: "price-high-low" },
    { label: "Date: Old to New", value: "date-old-new" },
    { label: "Date: New to Old", value: "date-new-old" },
  ];

  const activeLabel =
    buttons.find((btn) => btn.value === sortType)?.label || "Default";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-fit text-xs md:text-sm">
      {/* TOP */}
      <div className="flex justify-end">
        <div
            onClick={() => setOpen(!open)}
            className="flex justify-between items-center gap-6 py-1 border-b  border-gray-500 cursor-pointer"
        >
            <span>{activeLabel}</span>

            <img
            className="w-4 h-4"
            src="/assets/icons/arrow-down.png"
            alt="arrow"
            />
        </div>
     </div>
      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-md rounded-xs text-xs md:text-sm border border-gray-500 p-2 w-40 md:w-48 z-10">
          {buttons.map((button) => (
            <button
              key={button.value}
              onClick={() => {
                setSortType(button.value);
                setOpen(false);
              }}
              className={`flex w-full items-center px-0 py-1.5 rounded ${
                sortType === button.value
                  ? "text-red-500 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterUI;