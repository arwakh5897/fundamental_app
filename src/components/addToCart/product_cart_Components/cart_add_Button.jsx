import React, { useState } from "react";

const AddButton = ({ onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleProductDetails = () => {
    if (onAdd) onAdd(quantity); // callback parent ko quantity bhejne ke liye
  };

  return (
    <div className="flex items-center gap-2 md:gap-4 mt-4">
      
      {/* Quantity Selector */}
      <div className="flex items-center border-color rounded overflow-hidden">
        <button
          onClick={decrement}
          className="px-3 py-1  hover:bg-gray-200 transition"
        >
          -
        </button>
        <span className="w-8 py-1 min-w-[24px] text-center">{quantity}</span>
        <button
          onClick={increment}
          className="px-3 py-1  hover:bg-gray-200 transition"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleProductDetails}
        className="bg-menu-buttons font-semibold py-2 px-4 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddButton;