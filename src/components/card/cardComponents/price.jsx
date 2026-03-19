import React from "react";

const CardPrice = ({ price, discountedPrice }) => {
    return (
        <div className="flex gap-1 justify-center items-center">
          <div className="font-bold text-xs md:text-sm py-1">
            Rs {Math.round(discountedPrice)}
          </div>

          <div className="text-xs py-1 line-through text-gray-500">
            (Rs {Math.round(price)})
          </div>
        </div>
    )
}
export default CardPrice;