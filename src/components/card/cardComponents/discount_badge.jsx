import React from "react";

const CardDiscountBadge = ({ discount}) => {

    return (
    <span className="absolute z-10 -left-5 rotate-[-45deg] bg-red-700 text-foreground-secondary text-xs font-bold px-5 py-1 text-center group-hover:opacity-0">
      {discount}%
    </span>
    )
}
export default CardDiscountBadge;