import React from "react";

const CartTotal = ({ totalPrice = 0 }) => {
    return (
        <div className="flex justify-between font-semibold bg-gray-500 p-4">
            <h1>Total:</h1>
            <span className="text-sm">
                RS {Number(totalPrice).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}                </span>
        </div>
    );
}

export default CartTotal;