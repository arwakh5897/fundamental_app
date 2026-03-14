import React from "react";

const Card = ({ image, title, rating = 4.5, price = 4900, discount = 20 }) => {

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="bg-background-card md:w-1/5 shadow-md overflow-hidden flex md:flex-col rounded-2xl relative">

      {/* Discount Badge */}
      <span className="absolute top-2 left-2 bg-red-700 text-white text-sm font-bold px-3 py-1 rounded-full">
        {discount}%
      </span>

      {/* Image */}
      <div className="md:w-full md:h-64 w-1/2">
        <img
          src={image || "assets/images/banner1.png"}
          alt={title || "Product"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-2 md:text-center items-start md:items-center w-1/2 md:w-full">

        <h3 className="text-lg font-semibold">
          {title || "Card Title"}
        </h3>

        <div className="text-sm hidden md:flex">
          ⭐⭐⭐⭐⭐
        </div>

        {/* Price */}
        <div className="flex gap-1 justify-center items-center">
          <div className="font-bold py-1">
            Rs {discountedPrice}
          </div>

          <div className="text-xs py-1 line-through text-gray-500">
            (Rs {price})
          </div>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:flex bg-menu-buttons py-1 px-4 rounded-md hover:opacity-90 font-bold hover:cursor-pointer transition">
          Add to Cart
        </button>

        {/* Mobile Button */}
        <button className="md:hidden bg-menu-buttons w-8 h-8 flex items-center justify-center rounded-full hover:opacity-90 font-bold mt-auto self-end hover:cursor-pointer transition">
          +
        </button>

      </div>
    </div>
  );
};

export default Card;