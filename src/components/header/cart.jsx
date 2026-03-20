import React from "react";

const Cart=({darkLight})=>{
    return(
     <div className="text-text dark:text-text-light">
        <img 
        src={darkLight ? "/assets/icons/light-cart.png" : "/assets/icons/cart.png"} 
        alt="Cart Icon" className="w-6 h-6"/>
     </div>
    )
}
export default Cart;