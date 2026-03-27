import React from "react";
import { useLocation } from "react-router-dom";

import ProductDetailImages from "../../components/addToCart/product_detail_images"; 
import ProductCartView from "../../components/addToCart/product_cart_view";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import RelatedProducts from "../../components/addToCart/related_products";
import FullDescription from "../../components/addToCart/full_decription";
import Review from "../../components/addToCart/reviews";
import Headings from "../../components/addToCart/headings";

const ProductDetails = () => {
  const { state } = useLocation();
  const products = state?.productData;
  return (
  <div>
    <div className="flex flex-col p-2">      
      <Breadcrumb title={products?.title}/>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Images */}
          <div className="w-full md:p-0 md:w-1/2">
            <ProductDetailImages thumbnail={products?.image} />
          </div>

          {/* Right Side - Cart Details */}
          <div className="w-full md:w-1/2  md:px-6">
            <ProductCartView />
          </div>
        </div>
    </div>
    <div className="flex py-4">
      <Headings />
    </div>
    <div className="py-4">
      <RelatedProducts />
    </div>
  </div>
  );
};

export default ProductDetails;