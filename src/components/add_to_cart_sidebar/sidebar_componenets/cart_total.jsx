import React from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

const CartTotal = ({ totalPrice = 0 }) => {
  return (
    <div className="p-4">
      <div className="rounded-2xl bg-cart-total p-4 shadow-lg">
        
        <p className="text-xs uppercase tracking-wide text-halfWhite">
          Total Amount
        </p>

        <div className="flex justify-between items-end mt-1">
          <h2 className="text-2xl font-bold">
            Rs {formatCurrency(totalPrice)}
          </h2>

          <span className="text-xs text-halfWhite">
            incl. taxes
          </span>
        </div>

      </div>
    </div>
  );
};

export default CartTotal;