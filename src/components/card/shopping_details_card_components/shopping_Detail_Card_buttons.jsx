import React from "react";
import { useNavigate } from "react-router-dom";

const ShoppingDetailsCardButtons = () => {
    const navigate = useNavigate();
    return(        
    <div className="flex flex-col gap-3 p-2 font-semibold text-xs lg:text-sm transition-colors duration-200 mt-auto">
    <div className="flex gap-3">
      <button
        className="w-full lg:w-72 py-2 bg-buttons hover-bg-buttons rounded  hover:cursor-pointer"
        onClick={() => {
          navigate("/pages/shop_all");
        }}
      >
        Continue Shopping
      </button>
      <button
        className="w-full lg:w-72 py-2 bg-buttons hover-bg-buttons rounded hover:cursor-pointer "
        onClick={() => {
          navigate("/pages/checkout");
        }}
      >
        Checkout
      </button>
      </div>
    </div>
    )
}
export default ShoppingDetailsCardButtons;