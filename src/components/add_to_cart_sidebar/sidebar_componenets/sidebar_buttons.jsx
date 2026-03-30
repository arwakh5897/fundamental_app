import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarButtons = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-gray-800 font-semibold text-foreground-secondary transition-colors duration-200 mt-auto">
      <button
        className="w-full  py-4 hover:bg-gray-600 hover:cursor-pointer"
        onClick={() => {
          navigate("/pages/shopping_details");
          onClick();
        }}
      >
        View Cart
      </button>
      <button
        className="w-full py-4  hover:bg-gray-600 hover:cursor-pointer "
        onClick={() => {
          navigate("/pages/checkout");
          onClick();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default SidebarButtons;