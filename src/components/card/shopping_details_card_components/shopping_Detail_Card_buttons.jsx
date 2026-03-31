import React from "react";
import { useNavigate } from "react-router-dom";

const ShoppingDeatailsCardButtons = () => {
    const navigate = useNavigate();
    return(        
    <div className="flex flex-col gap-3 p-2 font-semibold text-xs lg:text-sm transition-colors duration-200 mt-auto">
    <div className="flex gap-3">
      <button
        className="w-full lg:w-72 py-2 bg-buttons hover-bg-buttons rounded  hover:cursor-pointer"
        onClick={() => {
          // navigate("/pages/shop_all");
          onClick();
        }}
      >
        Update Cart
      </button>
      <button
        className="w-full lg:w-72 py-2 bg-buttons hover-bg-buttons rounded hover:cursor-pointer "
        onClick={() => {
          navigate("/pages/checkout");
          onClick();
        }}
      >
        Checkout
      </button>
      </div>
      <button
        className="w-full lg:w-2/3 py-3 bg-buttons hover-bg-buttons hover:cursor-pointer"
        onClick={() => {
          navigate("/pages/shop_all");
          onClick();
        }}
      >
        Continue Shopping
      </button>
    </div>
    )
}
export default ShoppingDeatailsCardButtons;