import React from "react";
import IncreamentDecreamentButton from "../buttons/increament&decrement_button";

const ShoppingDetailsCard = ({
  image,
  name,
  qty = 1,
  price = 233,
  size = "M",
  color = "Black",
  onRemove,
}) => {
  return (
    <div className="flex gap-3 p-3 border-b bg-white rounded-lg shadow-sm hover:shadow-md transition">

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
          <h3 className="text-sm lg:text-base font-semibold line-clamp-2">
            {name || "Product Name"}
          </h3>

          <button
            onClick={onRemove}
            className="p-1 hover:bg-red-100 rounded"
          >
            <img
              className="w-4 h-4"
              src="/assets/icons/delete.png"
              alt="delete"
            />
          </button>
        </div>

        {/* Details */}
        <div className="text-xs lg:text-sm text-gray-600 space-y-1">
          <p>QTY: {qty}</p>
          <p>Size: {size}</p>
          <p>Color: {color}</p>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-2">
          
          {/* Price */}
          <p className="text-sm lg:text-base font-bold text-green-600">
            Rs {Number(price).toFixed(2)}
          </p>

          {/* Quantity Buttons */}
          <IncreamentDecreamentButton />
        </div>
      </div>
    </div>
  );
};

export default ShoppingDetailsCard;