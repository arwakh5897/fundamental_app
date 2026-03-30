import React from "react";

const CartPrice = ({price , discountedPrice})=>{
  return(
    <div className="flex gap-3 font-semibold justify-start items-center">
          <h3 className="line-through">Rs {Number(price || 0).toFixed(2)}PKR</h3>
          <h2 className="text-highlighted text-lg">Rs {Number(discountedPrice || 0).toFixed(2)}PKR</h2>
    </div>

  )
}
export default CartPrice;


