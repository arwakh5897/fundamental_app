import { useState, useEffect } from "react";

const useCart = () => {

  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

const handleAddToCart = (product, quantity) => {
  if (!product || !product.id) return; // ❌ ignore invalid products

  setCart((prev) => {
    const existing = prev.find((p) => p.id === product.id);

    if (existing) {
      return prev.map((p) =>
        p.id === product.id
          ? { ...p, qty: p.qty + quantity }
          : p
      );
    }


    return [...prev, { ...product, qty: quantity }]; // ✅ push new product
    
  });
};

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return {
    cart,
    handleAddToCart,
    handleRemoveItem,
    clearCart,
  };
};

export default useCart;