import React from "react";
import Images from "../components/addToCart/image";
import CartView from "../components/addToCart/cart_view";

const AddToCart = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:p-2">
      <a href> Home</a>
      {/* Left Side - Images */}
      <div className="w-full md:w-1/2">
        <Images />
      </div>

      {/* Right Side - Cart Details */}
      <div className="w-full md:w-1/2 px-2">
        <CartView />
      </div>
    </div>
  );
};

export default AddToCart;