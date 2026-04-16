import React from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

const CartTotal = ({ totalPrice = 0 }) => {
  return (
    <div className="p-4">
      <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 shadow-lg">
        
        <p className="text-xs uppercase tracking-wide text-gray-300">
          Total Amount
        </p>

        <div className="flex justify-between items-end mt-1">
          <h2 className="text-2xl font-bold">
            Rs {formatCurrency(totalPrice)}
          </h2>

          <span className="text-xs text-gray-300">
            incl. taxes
          </span>
        </div>

      </div>
    </div>
  );
};

export default CartTotal;