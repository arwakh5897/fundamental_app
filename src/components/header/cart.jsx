import React, { useState } from "react";
import AddToCartSidebar from "../add_to_cart_sidebar/add_to_cart_sidebar";
import { useCartContext } from "../../context/cartContext"; // ✅ cart context

const Cart = ({ darkLight }) => {
  const [active, setActive] = useState(false);
  const { cart, handleRemoveItem} = useCartContext(); // ✅ get cart
 
  const totalItems = cart.reduce((sum , item)=> sum + item.qty,0);
  const totalPrice = cart.reduce((sum , item)=>sum + item.discountedPrice * item.qty,0);
  return (
    <div className="relative">
      <div className="text-text dark:text-text-light hover:cursor-pointer"
        onClick={()=>setActive(true)}
        >
        <img
          src={darkLight ? "/assets/icons/light-cart.png" : "/assets/icons/cart.png"}
          alt="Cart Icon"
          className="w-6 h-6"
        />
        {totalItems > 0 && (
         <span className="absolute -top-2 -right-2 bg-red-600 text-foreground-secondary text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </div>

      <AddToCartSidebar
        active={active} 
        totalItems={totalItems} 
        totalPrice={totalPrice}
        onClose={() => setActive(false)}
        cart={cart}
        onRemove={handleRemoveItem} 
      />
    </div>
  );
};

export default Cart;