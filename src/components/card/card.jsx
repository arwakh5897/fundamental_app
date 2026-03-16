import React, { useState } from "react";

const Card = ({ image, title, rating = 4.5, price = 4900, discount = 50 }) => {

  const discountedPrice = price - (price * discount) / 100;
  const [hover,setHover] = useState(false);
  return (
    <div className="bg-background-card w-32 md:w-72 shadow-md overflow-hidden hover:cursor-pointer flex flex-col rounded-xl relative">

      {/* Discount Badge */}
    <span className="absolute -left-5 rotate-[-45deg] bg-red-700 text-white text-xs text-sm font-bold px-5 py-1 text-center">
      {discount}%
    </span>

      {/* Image */}
      <div className="w-full md:h-64 h-24    ">
        <img
          src={image || (hover ? "assets/images/banner1.png" : "assets/images/banner2.png")}
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
          alt={title || "Product"}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105 "
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-2 text-center items-center w-full">

        <h3 className="md:text-lg text-xs flex-wrap font-semibold">
          {title || "Card Title"}
        </h3>

        <div className="text-xs flex">
          ⭐⭐⭐⭐⭐
        </div>

        {/* Price */}
        <div className="flex gap-1 justify-center items-center">
          <div className="font-bold text-xs md:text-sm py-1">
            Rs {discountedPrice}
          </div>

          <div className="text-xs py-1 line-through text-gray-500">
            (Rs {price})
          </div>
        </div>

        {/* Desktop Button */}
        <button className=" flex bg-menu-buttons py-1 px-4 rounded-sm text-xs md:text-sm hover:opacity-90 md:font-semibold hover:cursor-pointer transition">
         Add&nbsp;<span className="hidden md:flex">to Cart</span>
        </button>

      </div>
    </div>
  );
};

export default Card;