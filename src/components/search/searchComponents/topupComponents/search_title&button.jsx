import React from "react";

const SearchTitle =({handleClick})=>{
    return(
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-sm md:text-base">
          Search
        </h4>
        <button
          onClick={handleClick}
          className="text-gray-700 hover:text-gray-900 transition text-lg"
        >
          ✕
        </button>
      </div>
    )
}
export default SearchTitle;