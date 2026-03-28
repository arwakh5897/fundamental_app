import React, { useState } from "react";
import AddToCartSidebar from "../addToCart/add_to_cart_sidebar";

const Cart=({darkLight})=>{
    const [active, setActive] = useState(false);
    return(
    <div>
     <div className="text-text dark:text-text-light">
        <img 
        src={darkLight ? "/assets/icons/light-cart.png" : "/assets/icons/cart.png"} 
        alt="Cart Icon" className="w-6 h-6"
        onClick={() => setActive(true)}
        />
     </div>
     <AddToCartSidebar active={active} onClose={() => setActive(false)}/>
    </div>
    )
}
export default Cart;