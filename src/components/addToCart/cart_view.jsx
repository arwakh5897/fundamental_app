import React from "react";
import CartTitle from "./cartComponents/title";
import CartPrice from "./cartComponents/price";
import CartDescription from "./cartComponents/description";
import Size from "./cartComponents/size";
import Color from "./cartComponents/color";
import AddButton from "./cartComponents/addButton";
import CartBuyButton from "./cartComponents/buyButton";
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