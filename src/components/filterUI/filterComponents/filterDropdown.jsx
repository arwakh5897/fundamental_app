import React from "react";

const FilterDropdown = ({ buttons, sortType, onSelect }) => {
  return (
    <div className="absolute right-0 mt-2 bg-white shadow-md rounded-xs text-xs md:text-sm border border-color p-2 w-40 md:w-48 z-10">
      {buttons.map((button) => (
        <button
          key={button.value}
          onClick={() => onSelect(button.value)}
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
  );
};

export default FilterDropdown;