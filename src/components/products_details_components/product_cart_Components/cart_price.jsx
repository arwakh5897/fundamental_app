import React from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

const CartPrice = ({ price, discountedPrice }) => {
    const hasDiscount = discountedPrice && discountedPrice < price;

    return (
        <div className="flex gap-3 font-semibold justify-start items-center">
            
            {/* Original price (sirf tab show hoga jab discount ho) */}
            {hasDiscount && (
                <h3 className="line-through ">
                    Rs {formatCurrency(price || 0)} PKR
                </h3>
            )}

            {/* Final price */}
            <h2 className="text-lg text-highlighted">
                Rs {formatCurrency(hasDiscount ? discountedPrice : price || 0)} PKR
            </h2>

        </div>
    );
};

export default CartPrice;