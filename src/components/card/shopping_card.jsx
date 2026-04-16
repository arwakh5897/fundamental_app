import React from "react";
import { formatCurrency } from "../../../utils/formatCurrency";

const ShoppingCard = ({ image, title, qty, price ,onRemove}) => {
  return (
    <div className="flex gap-3 p-2 space-y-2 rounded-2xl shadow-md">
      
      {/* Image */}
      <div className="w-16 h-16 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image || "/assets/images/banner.png"}
          alt="Product Image"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-medium line-clamp-1">
          {title || "Product"}
        </h3>

        <p className="text-xs">
          QTY: {qty || "1"}
        </p>

        <p className="text-sm font-semibold ">
          Rs {formatCurrency(price)}
        </p>
      </div>
      <div>
        <button
          onClick={onRemove}
          className="hover:cursor-pointer"
        >
          <img className="w-4 h-4" src="/assets/icons/delete.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;