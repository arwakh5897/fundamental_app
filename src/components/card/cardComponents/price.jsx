import React from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

const CardPrice = ({ price, discountedPrice }) => {
  const hasDiscount = discountedPrice && discountedPrice < price;
    return (
        <div className="flex gap-1 line-clamp-1 md:gap-2 text-xs justify-center items-center">
          <span className="font-semibold lg:text-sm">
            Rs {formatCurrency(hasDiscount ? discountedPrice : price || 0)}
          </span>

            {hasDiscount && (
                <span className="flex line-through text-fullGray text-[10px] md:text-xs">
                    (Rs {formatCurrency(price || 0)})
                </span>
            )}
        </div>
    )
}
export default CardPrice;