import React, { useState } from "react";
import AddButton from "../../products_details_components/product_cart_Components/cart_add_Button";
import ShoppingCard from "../shopping_card";
const ProductPageLogic = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, qty: p.qty + item.qty }
            : p
        );
      }

      return [...prev, item];
    });

  };

  return (
    <>
      <AddButton products={product} onAdd={handleAddToCart} />

      <ShoppingCard image={product.image} name={product.title} qty={1} price={product.price} />
 
    </>
  );
};

export default ProductPageLogic;