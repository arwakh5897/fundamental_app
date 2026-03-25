import React from "react";

const CartPrice = ({price , discountedPrice})=>{
  return(
    <div className="flex gap-3 font-semibold">
          <h3 className="line-through">Rs {price} PKR</h3>
          <h2 className="text-highlighted">Rs {discountedPrice} PKR</h2>
    </div>

  )
}
export default CartPrice;


