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

const Card = ({
  image,
  title,
  description,
  rating = 4.5,
  price = 4900,
  discount = 50,
  stock = 10
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const discountedPrice = price - (price * discount) / 100;

  const productData = {
    image,
    title,
    description,
    rating,
    price,
    discount,
    discountedPrice,
    stock
  };

  return (
    <>
      {/* ✅ Card */}
      <div
        onClick={() =>
          navigate("/pages/product_details", { state: { productData } })
        }
        className="bg-background-card w-36 md:w-72 shadow-sm overflow-hidden cursor-pointer flex flex-col rounded-xl relative group"
      >
        {/* 👁 Eye Button */}
        <EyeButton onClick={() => setOpen(true)} />

        {discount > 0 && (
          <CardDiscountBadge discount={discount} price={price} />
        )}

        <CardStock stock={stock} />
        <CardImage image={image} />

        <div className="flex flex-col p-2 text-center items-center w-full">
          <CardTitle title={title} />
          <CardRating rating={rating} />

          <CardPrice
            price={price}
            discount={discount}
            discountedPrice={discountedPrice}
          />

          <CardStockCount stock={stock} />
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