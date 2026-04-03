import React from "react";
import { formatCurrency } from "../../../../utils/formatCurrency";

const CartPrice = ({price , discountedPrice})=>{
  return(
    <div className="flex gap-3 font-semibold justify-start items-center">
          <h3 className="line-through">Rs {formatCurrency (price || 0)}PKR</h3>
          <h2 className="text-highlighted text-lg">Rs {formatCurrency (discountedPrice || 0)}PKR</h2>
    </div>

  )
}
export default CartPrice;


