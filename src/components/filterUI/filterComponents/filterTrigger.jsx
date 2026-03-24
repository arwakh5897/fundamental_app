import React from "react";

const FilterTrigger = ({ activeLabel, open, setOpen }) => {
  return (
    <div className="flex justify-end">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center gap-6 py-1 border-b border-gray-500 cursor-pointer"
      >
        <span>{activeLabel}</span>

        <img
          className="w-4 h-4"
          src="/assets/icons/arrow-down.png"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default FilterTrigger;