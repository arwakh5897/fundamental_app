import React, { useState } from "react";
import CardDiscountBadge from "./cardComponents/discount_badge";
import CardImage from "./cardComponents/image";
import CardTitle from "./cardComponents/title";
import CardRating from "./cardComponents/rating";
import CardPrice from "./cardComponents/price";
import CardButton from "./cardComponents/button";
import CardStock from "./cardComponents/stock";

const Card = ({ image, title,description, rating = 4.5, price = 4900, discount=50, stock=10 }) => {
 const discountedPrice = price - (price * discount) / 100;
  return (
    <div className="bg-background-card w-36 md:w-72 shadow-sm overflow-hidden hover:cursor-pointer flex flex-col rounded-xl relative">
      {discount > 0 && (
        <CardDiscountBadge discount={discount} price={price} />
      )} 
      <CardStock stock={stock} />  
      <CardImage image={image} />

      {/* Content */}
      <div className="flex flex-col p-2 text-center items-center w-full">
        <CardTitle title={title} />
        <CardRating rating={rating} />
        <CardPrice price={price} discount={discount} discountedPrice={discountedPrice} />
        <CardButton 
          disabled={stock === 0} 
          productData={{ image, title,description, rating, price, discount,discountedPrice, stock }} 
        />      </div>
    </div>
  );
};

export default Card;