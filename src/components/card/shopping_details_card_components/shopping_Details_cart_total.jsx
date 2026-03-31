import React from "react";

const ShoppingDetailsCartTotal = ({ totalPrice = 0 }) => {
    return (
        <div className="flex justify-end
         gap-3 text-sm lg:text-xl font-bold lg:font-semibold p-2">
            <h1> Total:</h1>
            <h1 className="text-green-600">
                Rs.{Number(totalPrice).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h1>
        </div>
    );
}
export default ShoppingDetailsCartTotal;