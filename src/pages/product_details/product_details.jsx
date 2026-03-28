import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import ProductDetailImages from "../../components/products_details_components/product_detail_images";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import RelatedProducts from "../../components/products_details_components/related_products";
import ProductDetailHeadings from "../../components/products_details_components/product_detail_headings";
import ProductDetailCart from "../../components/products_details_components/product_detail_cart";
import AddToCartSidebar from "../../components/addToCart/add_to_cart_sidebar";

const ProductDetails = () => {
  const { state } = useLocation();
  const products = state?.productData;

  const [cart, setCart] = useState([]); // cart items
  const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar toggle

  // callback from AddButton
  const handleAddToCart = (quantity) => {
    setCart((prev) => {
      // check if product already exists
      const existing = prev.find((p) => p.id === products.id);
      if (existing) {
        return prev.map((p) =>
          p.id === products.id ? { ...p, qty: p.qty + quantity } : p
        );
      }
      return [...prev, { ...products, qty: quantity }];
    });

    setSidebarOpen(true); // open sidebar
  };

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
              onAdd={handleAddToCart} // send callback
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
        active={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        cart={cart}
      />
    </div>
  );
};

export default ProductDetails;