import React, { createContext, useContext } from "react";
import useCart from "../hook/cart_hook";

const CartContext = createContext();

export const CartProvider = ({children})=>{
    const cartData = useCart();
    return(
        <CartContext.Provider value={cartData}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);