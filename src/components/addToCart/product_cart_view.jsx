import React from "react";
import CartTitle from "./product_cart_Components/cart_title";
import CartPrice from "./product_cart_Components/cart_price";
import CartDescription from "./product_cart_Components/cart_description";
import Size from "./product_cart_Components/cart_size";
import Color from "./product_cart_Components/cart_color";
import AddButton from "./product_cart_Components/cart_add_Button";
import CartBuyButton from "./product_cart_Components/cart_buy_Button";
import { useLocation } from "react-router-dom";
import Divider from "../divider/divider";

const ProductCartView = () => {
  const {state} = useLocation();
  const products = state?.productData;
  return (
    <div className="w-full space-y-4">
      
      {/* Title */}
      <CartTitle title={products?.title} />

      {/* Price */}
      <CartPrice price={products?.price} discountedPrice={products?.discountedPrice}/>

      {/* Divider */}
       <Divider className="py-2 md:py-6"/>

      {/* Description */}
      <CartDescription description={products?.description}/>

      {/* Variant Selector */}
      <Size/>
      <Color/>

       <div className="flex flex-col gap-4 py-4 md:py-0 md:sticky md:bottom-0">
        <Divider className="py-2 md:py-6" />
        <AddButton  />
        <CartBuyButton  />
      </div>

      {/* Add to Cart Button (optional) */}
      {/* <CardButton /> */}

    </div>
    
  );
};

export default ProductCartView;