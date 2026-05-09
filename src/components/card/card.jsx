import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../../../utils/useToast";

import CardDiscountBadge from "./cardComponents/discount_badge";
import CardImage from "./cardComponents/image";
import CardTitle from "./cardComponents/title";
import CardRating from "./cardComponents/rating";
import CardPrice from "./cardComponents/price";
import CardStock from "./cardComponents/stock";
import CardStockCount from "./cardComponents/stock_count";
import EyeButton from "../buttons/eye_button";

import ProductDetailsPopup from "../product_popUp/product_popUp";

const Card = ({ id, image, title, description ,category,
   rating,  price ,  discount ,  stock ,  sizes,  colors, count , hoverImage , subImages , total_reviews , avarage_rating  , reviews,}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { error } = useToast();

  const discountedPrice = price - (price * discount) / 100;

  const productData = { id, image, title, description, category, rating, price, discount, discountedPrice, stock, sizes, colors , count , hoverImage , subImages , total_reviews , avarage_rating  , reviews,};
  
  const handleClick = (e)=>{
      e.preventDefault();

      if (productData?.stock <= 0) {
        error("Product out of stock!");
        return;
      }

       navigate(`/pages/product_details/${productData.id}`  , { state: { productData }
      
      });
  }
  return (
    <>
    <div>
      {/* ✅ Card */}
      <div
        onClick={handleClick}
        className="bg-card w-36 lg:w-80 shadow-sm overflow-hidden cursor-pointer flex flex-col rounded-xl relative group"
      >
        {/* 👁 Eye Button */}
        {stock > 0 && (
          <EyeButton onClick={() => setOpen(true)} />
         )}

        {discount > 0 && (
          <CardDiscountBadge discount={productData.discount} price={productData.price} />
        )}

        <CardStock stock={productData.stock} />
        <CardImage image={productData.image} hoverImage={productData.hoverImage} />

        <div className="flex flex-col py-2 text-center items-center w-full">
          <CardTitle title={productData.title} />
          <CardRating rating={productData.avarage_rating} />

          <CardPrice
            price={productData.price}
            discount={productData.discount}
            discountedPrice={productData.discountedPrice}
          />

          <CardStockCount stock={productData.stock} />
        </div>
      </div>

      {/* ✅ Popup */}
      <ProductDetailsPopup
        product={productData}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      </div>
    </>
  );
};

export default Card;