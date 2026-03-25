import React from "react";
import CartTitle from "./cartComponents/title";
import CartPrice from "./cartComponents/price";
import CartDescription from "./cartComponents/description";
import Size from "./cartComponents/size";
import Color from "./cartComponents/color";
import AddButton from "./cartComponents/addButton";
import CartBuyButton from "./cartComponents/buyButton";
import { useLocation } from "react-router-dom";

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
      <div className="pt-6">      
        <span className="block h-[1px] w-full bg-line"></span>
     </div>

      {/* Description */}
      <CartDescription description={products?.description}/>

      {/* Variant Selector */}
      <Size/>
      <Color/>

       <div className="flex flex-col gap-4 py-4 md:sticky md:bottom-0 border-t border-gray-200">
        <AddButton className="flex-1" />
        <CartBuyButton className="flex-1" />
      </div>

      {/* Add to Cart Button (optional) */}
      {/* <CardButton /> */}

    </div>
    
  );
};

export default CartView;