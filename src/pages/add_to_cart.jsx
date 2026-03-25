import React from "react";
import Images from "../components/addToCart/image";
import CartView from "../components/addToCart/cart_view";
import { useLocation } from "react-router-dom";

const AddToCart = () => {
  const { state } = useLocation();
  const products = state?.productData;
  return (
    <div className="flex flex-col md:flex-row gap-6 md:p-2">
      {/* <a href> Home</a> */}
      {/* Left Side - Images */}
      <div className="w-full p-2 md:p-0 md:w-1/2">
        <Images thumbnail={products?.image} />
      </div>

      {/* Right Side - Cart Details */}
      <div className="w-full md:w-1/2 px-2 md:px-6">
        <CartView />
      </div>
    </div>
  );
};

export default AddToCart;