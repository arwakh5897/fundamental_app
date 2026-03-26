import React from "react";

const CardPrice = ({ price, discountedPrice }) => {
    return (
        <div className="flex gap-1 text-xs justify-center items-center">
          <div className="font-bold md:text-lg">
            Rs {Math.round(discountedPrice)}.00
          </div>

          <div className="line-through">
            (Rs {Math.round(price)})
          </div>
        </div>
    )
}
export default CardPrice;