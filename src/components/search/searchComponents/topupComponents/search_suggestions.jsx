import React from "react";

const SearchSuggestions =()=>{
    return(
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
    )
}
export default SearchSuggestions;