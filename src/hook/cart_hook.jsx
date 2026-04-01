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

const handleAddToCart = (product, quantity, size , color) => {
  if (!product || !product.id) return;

  setCart((prev) => {
    const existing = prev.find((p) => p.id === product.id);

    if (existing) {
      return prev.map((p) =>
        p.id === product.id
          ? { ...p, qty: p.qty + quantity, selectedSize: size , selectedColor: color }
          : p
      );
    }

    return [...prev, { ...product, qty: quantity, selectedSize: size , selectedColor: color }];
  });
};
  const updateCartQty = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };
  const updateCartItemSize = (id, size) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? { ...item, selectedSize: size } : item
    )
  );
};
 const updateCartItemColor = (id , color)=>{
   setCart((prevCarts)=>
    prevCarts.map((item)=>
    item.id === id ? {...item, selectedColor : color}: item
    )
  )
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
    updateCartQty,
    updateCartItemSize,
    updateCartItemColor,
  };
};

export default useCart;