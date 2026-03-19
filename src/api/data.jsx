// utils/fetchProducts.js
export const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    // Add stable discount
    return data.map(item => ({
      ...item,
      discount: Math.floor(Math.random() * 30) + 5,
    }));
  } catch (err) {
    console.error("API fetch error:", err);
    return [];
  }
};