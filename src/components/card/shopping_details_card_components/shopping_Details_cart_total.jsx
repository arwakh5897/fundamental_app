import React from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

const ShoppingDetailsCartTotal = ({ totalPrice  }) => {
    return (
        <div className="flex justify-end
         gap-3 text-sm lg:text-xl font-bold lg:font-semibold p-2">
            <h1> Total:</h1>
            <h1 className="text-green-600">
                Rs.{formatCurrency (totalPrice || 0)}
            </h1>
        </div>
    );
}
export default ShoppingDetailsCartTotal;