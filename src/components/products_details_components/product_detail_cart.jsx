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
import CartReviews from "./product_cart_Components/cart_review";
import CartQuantity from "./product_cart_Components/cart_quantity";

const ProductDetailCart = ({ products , onAdd ,  onUpdateSize , onUpdateColor , shortDescription}) => {
  const { error , success } = useToast();
  const navigate = useNavigate();
  const [quantity , setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);  

  const handleSizeChange = (newSize)=>{
    setSelectedSize(newSize);
    onUpdateSize(products.id , newSize);
    }
  const handleColorChange = (newColor)=>{
    setSelectedColor(newColor);
    onUpdateColor(products.id , newColor);
  }
  const handleAddClick = (qty) => {
  if (!selectedSize || !selectedColor) {
    error("Please select size and color first");
    return;
  }
  else {
    success("Item added to cart 🛒");
    navigate("/pages/shop_all");
  }

  onAdd(qty, selectedSize , selectedColor);
};


  return (
    <div className="w-full space-y-2 top-0 ">
      
      {/* Title */}
      <CartTitle title={products?.title} />

      {/* Reviews */}
      <CartReviews rating={products?.rating} totalReviews={products?.count}/>

      {/* Price */}
      <CartPrice price={products?.price} discountedPrice={products?.discountedPrice}/>

      {/* Divider */}
       <Divider className="py-2"/>

      {/* Description */}
      <CartDescription description={shortDescription}/>

      {/* Variant Selector */}
      <Size 
       sizes={products?.sizes}
       selectedSize={selectedSize}
       onSelectSize={handleSizeChange}
      />
      <Color 
      colors={products?.colors}
      selectedColor={selectedColor}
      onSelectColor={handleColorChange}
      />

       <div className="flex flex-col gap-4 py-4 lg:py-0">
        <Divider className="py-2" />

        <div className="flex items-center gap-2 lg:gap-4 mt-4">
          
            <CartQuantity 
              quantity={quantity} 
              setQuantity={setQuantity}
            />

            <AddButton 
              onAdd={()=>handleAddClick(quantity)}
            />            
        </div>

            <CartBuyButton 
              products={products}
              qty={quantity}
              selectedSize={selectedSize}
              selectedColor={selectedColor} 
            />
      </div>

    </div>
    
  );
};

export default ProductDetailCart;