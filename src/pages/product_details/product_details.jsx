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
  const { cart,  handleAddToCart, handleRemoveItem, } = useCartContext();

  return (
    <div>
      <div className="flex flex-col p-2">
        <Breadcrumb title={products?.title} />

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Images */}
          <div className="w-full md:p-0 md:w-1/2">
            <ProductDetailImages thumbnail={products?.image} />
          </div>

          {/* Right Side - Cart Details */}
          <div className="w-full md:w-1/2 md:px-6">
            <ProductDetailCart
              title={products?.title}
              description={products?.description}
              price={products?.price}
              discountedPrice={products?.discountedPrice}
              onAdd={(qty) => handleAddToCart(products, qty)}            />
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