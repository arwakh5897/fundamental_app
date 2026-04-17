import React from "react";

const CartSaving =({ discount })=>{
    return(
        <div className="flex text-xs text-green">
            <span>Save {discount}% on this item</span>
        </div>
    )
}
export default CartSaving;