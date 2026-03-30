import React from "react";

const CardPrice = ({ price, discountedPrice }) => {
    return (
        <div className="flex gap-1 text-xs justify-center items-center">
          <div className="font-bold lg:text-lg">
            Rs {Number(discountedPrice).toFixed(2)}
          </div>

          <div className="line-through">
            (Rs {Number(price || 0).toFixed(2)})
          </div>
        </div>
    )
}
export default CardPrice;