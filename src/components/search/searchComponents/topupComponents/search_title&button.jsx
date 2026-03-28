import React from "react";
import CloseButton from "../../../buttons/close_button";

const SearchTitle =({handleClick})=>{
    return(
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-sm md:text-base">
          Search
        </h4>
        <CloseButton onClick={handleClick}/>
      </div>
    )
}
export default SearchTitle;