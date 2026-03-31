// utils/fetchProducts.js
export const fetchProducts = async () => {
  try { 
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    // Add stable discount
    return data.products;
  } catch (err) {
    console.error("API fetch error:", err);
    return [];
  }
};