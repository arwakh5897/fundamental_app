import React from "react";

const CardDiscountBadge = ({ discount}) => {

    return (
    <span className="absolute -left-5 rotate-[-45deg] bg-red-700 text-white text-xs text-sm font-bold px-5 py-1 text-center">
      {discount}%
    </span>
    )
}
export default CardDiscountBadge;