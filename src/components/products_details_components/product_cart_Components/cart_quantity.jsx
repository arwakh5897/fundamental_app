import React from "react";

const CartQuantity = ({ quantity, setQuantity }) => {
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
      <div className="flex items-center border-color rounded overflow-hidden">
        <button
          onClick={decrement}
          className="px-3 py-1  hover:bg-gray-200 transition"
        >
          -
        </button>
        <span className="w-8 py-1 min-w-[24px] text-center text-heading">{quantity}</span>
        <button
          onClick={increment}
          className="px-3 py-1  hover:bg-gray-200 transition"
        >
          +
        </button>
      </div>
  );
};

export default CartQuantity;