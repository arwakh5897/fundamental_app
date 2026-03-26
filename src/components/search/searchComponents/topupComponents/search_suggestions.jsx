import React from "react";

const SearchSuggestions =({query , setQuery , handleSearch})=>{
  const suggestions = [
    "Men",
    "Women",
    "Footware"
  ];
  const handleClick =(item)=>{
    setQuery(item);
    handleSearch;
  }
    return(
      <div className="mt-4">
        <p className="text-xs  mb-2">Recent Searches</p>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((item,index)=>(
          <span 
          key={index} 
          onClick={()=>handleClick(item)}
          className="text-xs bg-background px-2 py-1 rounded-md cursor-pointer">
            {item}
          </span>
          ))}
        </div>
      </div>
    )
}
export default SearchSuggestions;