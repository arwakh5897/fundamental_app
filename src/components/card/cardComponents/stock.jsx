import React from "react";

const CardStock = ({ stock }) => {
    return(
    <span className={`absolute top-2 right-2 px-1 md:px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs font-semibold
      ${stock > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
    {stock > 0 ? "In Stock" : "Out of Stock"}
  </span> 
    )
};
export default CardStock;