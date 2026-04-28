import React from "react";

const CartSaving =({ discount })=>{
    if(!discount || discount <= 0){
    return null;
    }
    return(
        <div className="flex text-xs text-green">
            <span>Save {discount}% on this item</span>
        </div>
    )
}
export default CartSaving;