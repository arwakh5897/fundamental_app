import React from "react";
import CartTitle from "./cartComponents/cart_title";
import CartPrice from "./cartComponents/cart_price";
import CartDescription from "./cartComponents/cart_description";
import Size from "./cartComponents/cart_size";
import Color from "./cartComponents/cart_color";
import AddButton from "./cartComponents/cart_add_Button";
import CartBuyButton from "./cartComponents/cart_buy_Button";
import { useLocation } from "react-router-dom";
import Divider from "../divider/divider";

const CartView = () => {
  const {state} = useLocation();
  const products = state?.productData;
  return (
    <div className="w-full space-y-4">
      
      {/* Title */}
      <CartTitle title={products?.title} />

      {/* Price */}
      <CartPrice price={products?.price} discountedPrice={products?.discountedPrice}/>

      {/* Divider */}
       <Divider className="py-6"/>

      {/* Description */}
      <CartDescription description={products?.description}/>

      {/* Variant Selector */}
      <Size/>
      <Color/>

       <div className="flex flex-col gap-4 py-4 md:py-0 md:sticky md:bottom-0">
        <Divider className="py-6" />
        <AddButton  />
        <CartBuyButton  />
      </div>

      {/* Add to Cart Button (optional) */}
      {/* <CardButton /> */}

    </div>
    
  );
};

export default CartView;