import React, { useState } from "react";
import CartTitle from "./product_cart_Components/cart_title";
import CartPrice from "./product_cart_Components/cart_price";
import CartDescription from "./product_cart_Components/cart_description";
import Size from "./product_cart_Components/cart_size";
import Color from "./product_cart_Components/cart_color";
import AddButton from "./product_cart_Components/cart_add_Button";
import CartBuyButton from "./product_cart_Components/cart_buy_Button";
import Divider from "../divider/divider";
import useToast from "../../../utils/useToast";
import { useNavigate } from "react-router-dom";

const ProductDetailCart = ({ products , onAdd ,  onUpdateSize}) => {
  const { error , success } = useToast();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);  
  const handleSizeChange = (newSize)=>{
    setSelectedSize(newSize);
    onUpdateSize(products.id , newSize);
    }
  const handleAddClick = (qty) => {
  if (!selectedSize) {
    error("Please select size first");
    return;
  }
  else {
    success("Item added to cart 🛒");
    navigate("/pages/shop_all");
  }

  onAdd(qty, selectedSize); // ✅ dono pass karo
};
  return (
    <div className="w-full space-y-4">
      
      {/* Title */}
      <CartTitle title={products?.title} />

      {/* Price */}
      <CartPrice price={products?.price} discountedPrice={products?.discountedPrice}/>

      {/* Divider */}
       <Divider className="py-2 lg:py-6"/>

      {/* Description */}
      <CartDescription description={products?.description}/>

      {/* Variant Selector */}
      <Size 
       sizes={products?.sizes}
       selectedSize={selectedSize}
       onSelectSize={handleSizeChange}
      />
      <Color colors={products?.colors}/>

       <div className="flex flex-col gap-4 py-4 lg:py-0 lg:sticky lg:bottom-0">
        <Divider className="py-2 lg:py-6" />
        <AddButton  products={products} onAdd={handleAddClick}/>
        <CartBuyButton  />
      </div>

    </div>
    
  );
};

export default ProductDetailCart;