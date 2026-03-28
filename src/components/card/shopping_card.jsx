import React from "react";

const ShoppingCard = ({ image, name, qty, price }) => {
  return (
    <div className="flex items-center gap-3 p-3 border-b">
      
      {/* Image */}
      <div className="w-20 h-16 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt="Product Image"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-medium line-clamp-2">
          {name}
        </h3>

        <p className="text-xs">
          QTY: {qty}
        </p>

        <p className="text-sm font-semibold ">
          Rs {Math.round(price)}.00
        </p>
      </div>

    </div>
  );
};

export default ShoppingCard;