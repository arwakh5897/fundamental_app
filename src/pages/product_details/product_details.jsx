import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

import ProductDetailImages from "../../components/products_details_components/product_detail_images";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import RelatedProducts from "../../components/products_details_components/related_products";
import ProductDetailHeadings from "../../components/products_details_components/product_detail_headings";
import ProductDetailCart from "../../components/products_details_components/product_detail_cart";
import AddToCartSidebar from "../../components/add_to_cart_sidebar/add_to_cart_sidebar";

const ProductDetails = () => {
  const { state } = useLocation();
  const products = state?.productData;
  const { cart,  handleAddToCart, handleRemoveItem, updateCartItemSize , updateCartItemColor } = useCartContext();
  return (
    <div>
      <div className="flex flex-col p-4">
        <Breadcrumb title={products?.title} />

        <div className="flex flex-col lg:p-4 lg:flex-row gap-6">
          {/* Left Side - Images */}
          <div className="w-full lg:p-0 lg:w-1/2">
            <ProductDetailImages thumbnail={products?.image} />
          </div>

          {/* Right Side - Cart Details */}
          <div className="w-full lg:w-1/2 lg:px-6">
            <ProductDetailCart 
              products={products}
              onUpdateSize={updateCartItemSize } 
              onUpdateColor={updateCartItemColor}
              onAdd={(qty , size , color) => handleAddToCart(products, qty , size , color)} 
            />
          </div>
        </div>
      </div>

      <div className="flex py-4">
        <ProductDetailHeadings />
      </div>

      <div className="py-4">
        <RelatedProducts />
      </div>

      {/* Sidebar */}
      <AddToCartSidebar
        onRemove={handleRemoveItem}        
        cart={cart}
      />
    </div>
  );
};

export default ProductDetails;