import React from "react";
import IncreamentDecreamentButton from "../buttons/increament&decrement_button";
import { formatCurrency } from "../../../utils/formatCurrency";

const ShoppingDetailsCard = ({
  image,
  name,
  qty = 1,
  price = "",
  selectedSize,
  selectedColor,
  onRemove,
}) => {
  return (
    <div className="flex gap-3 p-3 border-b  rounded-lg shadow-sm hover:shadow-md transition">

      {/* Image */}
      <div className="w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 bg-image rounded-md overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={image || "/assets/images/banner.png"}
          alt="Product"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        
        {/* Title + Delete */}
        <div className="flex justify-between items-start">
          <h3 className="text-sm lg:text-base font-semibold line-clamp-2 w-5/6 ">
            {name || "Product Name"}
          </h3>

          <button
            onClick={onRemove}
            className="p-1 bg-white hover:cursor-pointer rounded"
          >
            <img
              className="w-4 h-4"
              src="/assets/icons/delete.png"
              alt="delete"
            />
          </button>
        </div>

        {/* Details */}
        <div className="text-xs lg:text-sm text-extraGray space-y-1">
          <p>QTY: {qty}</p>
          <p>Size: {selectedSize}</p>
          <p>Color: {selectedColor}</p>
        </div>


        {/* Bottom Section */}
        <div className="flex items-center justify-end">
          
          {/* Price */}
          <p className="text-sm lg:text-base font-bold text-green-600">
            Rs {formatCurrency(price * qty)}
          </p>

          {/* Quantity Buttons */}
          {/* <IncreamentDecreamentButton qty={qty} /> */}
        </div>
      </div>
    </div>
  );
};

export default ShoppingDetailsCard;