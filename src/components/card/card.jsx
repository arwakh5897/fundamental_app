import React, { useState } from "react";
import CardDiscountBadge from "./cardComponents/discount_badge";
import CardImage from "./cardComponents/image";
import CardTitle from "./cardComponents/title";
import CardRating from "./cardComponents/rating";
import CardPrice from "./cardComponents/price";
import CardButton from "./cardComponents/button";
import CardStock from "./cardComponents/stock";
import { useNavigate } from "react-router-dom";
import CardStockCount from "./cardComponents/stock_count";

const Card = ({ image, title,description, rating = 4.5, price = 4900, discount=50, stock=10 }) => {
  const navigate = useNavigate();
  const discountedPrice = price - (price * discount) / 100;
  const productData={ image, title,description, rating, price, discount,discountedPrice, stock };
  return (
    <div 
    onClick={()=>{navigate("/pages/product_details" , {state:{productData}})}}
    className="bg-background-card w-36 md:w-72 shadow-sm overflow-hidden hover:cursor-pointer flex flex-col rounded-xl relative"
    >
      {discount > 0 && (
        <CardDiscountBadge discount={discount} price={price} />
      )} 
      <CardStock stock={stock} />  
      <CardImage image={image} />

      {/* Content */}
      <div className="flex flex-col p-2 text-center items-center w-full">
        <CardTitle title={title} />
        <CardRating rating={rating} />
      {/* <div className="flex py-1 items-center gap-8"> */}
        <CardPrice price={price} discount={discount} discountedPrice={discountedPrice} />
        <CardStockCount stock={stock}/>
      {/* </div> */}
        {/* <CardButton 
          disabled={stock === 0} 
          productData={productData} 
        /> */}
         </div>
    </div>
  );
};

export default Card;