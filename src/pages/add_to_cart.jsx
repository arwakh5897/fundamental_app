import React from "react";
import Images from "../components/addToCart/image";
import CartView from "../components/addToCart/cart_view";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/breadcrumbs/breadcrumb";

const AddToCart = () => {
  const { state } = useLocation();
  const products = state?.productData;
  return (
    <div className="flex flex-col p-2">      
      <Breadcrumb title={products?.title}/>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Images */}
          <div className="w-full md:p-0 md:w-1/2">
            <Images thumbnail={products?.image} />
          </div>

          {/* Right Side - Cart Details */}
          <div className="w-full md:w-1/2  md:px-6">
            <CartView />
          </div>
        </div>
    </div>
  );
};

export default AddToCart;