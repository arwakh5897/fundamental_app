import React from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

const CardPrice = ({ price, discountedPrice }) => {
    return (
        <div className="flex gap-1 text-xs justify-center items-center">
          <div className="font-bold lg:text-lg">
            Rs {formatCurrency (discountedPrice || 0)}
          </div>

          <div className="line-through">
            (Rs {formatCurrency (price || 0)}
          </div>
        </div>
    )
}
export default CardPrice;