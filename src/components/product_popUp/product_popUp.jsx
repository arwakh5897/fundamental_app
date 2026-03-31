import React from "react";
import CloseButton from "../buttons/close_button";
import { useCartContext } from "../../context/cartContext";

import ProductDetailImages from "../products_details_components/product_detail_images";
import ProductDetailCart from "../products_details_components/product_detail_cart";

const ProductDetailsPopup = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;
  const { handleAddToCart } = useCartContext();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-[80%] overflow-y-auto scroll-auto rounded-xl shadow-lg z-10 p-4">

        {/* Close Button */}
        <CloseButton onClick={onClose} className={"absolute top-2 right-2 px-2 py-1 "}/>

        {/* Content (Same as ProductDetails) */}
        <div className="flex flex-col p-2">

          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Images */}
            <div className="w-full lg:w-1/2">
              <ProductDetailImages thumbnail={product?.image} />
            </div>

            {/* Cart View */}
            <div className="w-full lg:w-1/2 lg:px-6">
              <ProductDetailCart
                title={product?.title}
                description={product?.description}
                price={product?.price}
                discountedPrice={product?.discountedPrice}
                onAdd={(qty)=> handleAddToCart(product,qty)}

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPopup;