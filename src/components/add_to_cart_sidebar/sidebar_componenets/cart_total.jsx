import React from "react";
import {formatCurrency} from "../../../../utils/formatCurrency"

const CartTotal = ({ totalPrice = 0 }) => {
    return (
        <div className="flex justify-between font-semibold bg-gray-500 p-4">
            <h1>Total:</h1>
            <span className="text-sm">
                RS {formatCurrency(totalPrice)}</span>
        </div>
    );
}

export default CartTotal;