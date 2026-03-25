import React from "react";

const SearchTopUp = ({ handleClick }) => {
  return (
    <div className="absolute z-50 top-12 right-0 w-80 md:w-[420px] bg-menu-buttons shadow-xl rounded-xl p-4 border border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-sm md:text-base">
          Search
        </h4>
        <button
          onClick={handleClick}
          className="text-gray-400 hover:text-gray-700 transition text-lg"
        >
          ✕
        </button>
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-2 border border-color rounded-lg px-3 py-2 transition">
        <input
          type="text"
          className="w-full outline-none text-sm"
          placeholder="Search products..."
        />
        <img
          className="w-5 h-5 opacity-60"
          src="/assets/icons/search.png"
          alt="search"
        />
      </div>

      {/* Optional: Recent / Suggestions */}
      <div className="mt-4">
        <p className="text-xs  mb-2">Recent Searches</p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-background px-2 py-1 rounded-md cursor-pointer">
            Shoes
          </span>
          <span className="text-xs bg-background px-2 py-1 rounded-md cursor-pointer ">
            Shirts
          </span>
          <span className="text-xs bg-background px-2 py-1 rounded-md cursor-pointer ">
            Watches
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchTopUp;