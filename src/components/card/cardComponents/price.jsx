import React from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

const CardPrice = ({ price, discountedPrice }) => {
  const hasDiscount = discountedPrice && discountedPrice < price;
    return (
        <div className="flex gap-1 md:gap-2 text-xs justify-center items-center">
          <div className="font-semibold lg:text-sm">
            Rs {formatCurrency(hasDiscount ? discountedPrice : price || 0)}
          </div>

            {hasDiscount && (
                <div className="hidden md:flex line-through text-fullGray">
                    (Rs {formatCurrency(price || 0)})
                </div>
            )}
        </div>
    )
}
export default CardPrice;