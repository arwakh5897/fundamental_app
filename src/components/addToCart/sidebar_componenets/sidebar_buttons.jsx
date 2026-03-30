import React from "react";

const SidebarButtons = () => {
  return (
    <div className="flex bg-gray-800 font-semibold text-foreground-secondary transition-colors duration-200 mt-auto">
      <button
        className="w-full  py-4 hover:bg-gray-600 hover:cursor-pointer"
      >
        View Cart
      </button>
      <button
        className="w-full py-4  hover:bg-gray-600 hover:cursor-pointer "
      >
        Checkout
      </button>
    </div>
  );
};

export default SidebarButtons;