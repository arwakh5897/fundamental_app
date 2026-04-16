import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarButtons = ({ onClick }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClick && onClick();
  };

  return (
    <div className="mt-auto p-4 border-t shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex gap-3">
        
        {/* View Cart */}
        <button
          onClick={() => handleNavigate("/pages/shopping_details")}
          className="flex-1 py-3 rounded-xl bg-buttons hover-bg-buttons font-medium 
          hover:cursor-pointer transition-all duration-200 shadow-md"        >
          View Cart
        </button>

        {/* Checkout */}
        <button
          onClick={() => handleNavigate("/pages/checkout")}
          className="flex-1 py-3 rounded-xl bg-buttons hover-bg-buttons font-semibold 
          hover:cursor-pointer transition-all duration-200 shadow-md"
        >
          Checkout
        </button>

      </div>
    </div>
  );
};

export default SidebarButtons;