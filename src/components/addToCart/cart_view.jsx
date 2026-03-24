import React from "react";
import CartTitle from "./cartComponents/title";
import CartPrice from "./cartComponents/price";
import CartDescription from "./cartComponents/description";
import Size from "./cartComponents/size";
import Color from "./cartComponents/color";

const CartView = () => {
  return (
    <div className="w-full space-y-4">
      
      {/* Title */}
      <CartTitle />

      {/* Price */}
      <CartPrice />

      {/* Divider */}
      <div className="pt-6">      
        <span className="block h-[1px] w-full bg-line"></span>
     </div>

      {/* Description */}
      <CartDescription />

      {/* Variant Selector */}
      <Size/>
      <Color/>

      {/* Add to Cart Button (optional) */}
      {/* <CardButton /> */}

    </div>
  );
};

export default CartView;