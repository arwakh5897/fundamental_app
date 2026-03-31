import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CardDiscountBadge from "./cardComponents/discount_badge";
import CardImage from "./cardComponents/image";
import CardTitle from "./cardComponents/title";
import CardRating from "./cardComponents/rating";
import CardPrice from "./cardComponents/price";
import CardStock from "./cardComponents/stock";
import CardStockCount from "./cardComponents/stock_count";
import EyeButton from "../buttons/eye_button";

import ProductDetailsPopup from "../product_popUp/product_popUp";

const Card = ({ id, image, title, description, rating,  price ,  discount ,  stock ,  sizes,  colors,}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const discountedPrice = price - (price * discount) / 100;

  const productData = { id, image, title, description, rating, price, discount, discountedPrice, stock, sizes, colors };
   // console.log("Card Component - Product Data:", productData);
  return (
    <>
      {/* ✅ Card */}
      <div
        onClick={() =>
          navigate("/pages/product_details", { state: { productData } })
        }
        className="bg-background-card w-36 lg:w-72 shadow-sm overflow-hidden cursor-pointer flex flex-col rounded-xl relative group"
      >
        {/* 👁 Eye Button */}
        <EyeButton onClick={() => setOpen(true)} />

        {discount > 0 && (
          <CardDiscountBadge discount={productData.discount} price={productData.price} />
        )}

        <CardStock stock={productData.stock} />
        <CardImage image={productData.image} />

        <div className="flex flex-col py-2 text-center items-center w-full">
          <CardTitle title={productData.title} />
          <CardRating rating={productData.rating} />

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
    </>
  );
};

export default Card;