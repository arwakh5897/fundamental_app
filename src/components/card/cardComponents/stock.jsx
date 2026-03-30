import React from "react";

const CardStock = ({ stock }) => {
    return(
    <span className={`absolute group-hover:opacity-0 top-2 right-2 px-1 lg:px-2 py-0.5 lg:py-1 rounded text-[10px] lg:text-xs font-semibold
      ${stock > 0 ? "bg-green-500 text-foreground-secondary" : "bg-red-500 text-foreground-secondary"}`}>
    {stock > 0 ? "In Stock" : "Out of Stock"}
  </span> 
    )
};
export default CardStock;