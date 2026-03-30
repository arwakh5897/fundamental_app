import React from "react";
import { useNavigate } from "react-router-dom";

const ShoppingDeatailsCardButtons = () => {
    const navigate = useNavigate();
    return(        
    <div className="flex gap-3 p-2 font-semibold transition-colors duration-200 mt-auto">
      <button
        className="w-full py-4 bg-buttons hover-bg-buttons rounded  hover:cursor-pointer"
        onClick={() => {
          navigate("/pages/shop_all");
          onClick();
        }}
      >
        Continue Shopping
      </button>
      <button
        className="w-full py-4 bg-buttons hover-bg-buttons rounded hover:cursor-pointer "
        onClick={() => {
          navigate("/pages/checkout");
          onClick();
        }}
      >
        Proceed to Checkout
      </button>
    </div>
    )
}
export default ShoppingDeatailsCardButtons;