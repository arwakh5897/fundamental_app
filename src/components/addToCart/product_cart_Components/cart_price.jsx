import React from "react";

const CartPrice = ({price , discountedPrice})=>{
  return(
    <div className="flex gap-3 font-semibold justify-start items-center">
          <h3 className="line-through">Rs {Math.round(price)}.00 PKR</h3>
          <h2 className="text-highlighted text-lg">Rs {Math.round(discountedPrice)}.00 PKR</h2>
    </div>

  )
}
export default CartPrice;


