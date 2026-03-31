// utils/fetchProducts.js
// export const fetchProducts = async () => {
//   try { 
//     const res = await fetch("https://dummyjson.com/products/category/mens-shirts");
//     const data = await res.json();
//     return data.products;
//   } catch (err) {
//     console.error("API fetch error:", err);
//     return [];
//   }
// };


export const fetchProducts = async () => {
  return [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "Volumizing and lengthening mascara for dramatic lashes.",
    price: 9.99,
    discountPercentage: 10,
    rating: 4.2,
    stock: 99,
    category: "beauty",
    images: ["https://via.placeholder.com/300x300.png?text=Mascara"],
    sizes: ["24", "32", "40"],
    colors: ["black", "brown"],
  },
  {
    id: 2,
    title: "Knoll Executive Chair",
    description: "Comfortable ergonomic chair for office use.",
    price: 299.99,
    discountPercentage: 15,
    rating: 4.5,
    stock: 45,
    category: "furniture",
    images: ["https://via.placeholder.com/300x300.png?text=Chair"],
    sizes: ["Standard"],
    colors: ["black", "grey"],
  },
  {
    id: 3,
    title: "Apple AirPods Pro",
    description: "Noise-cancelling wireless earbuds with high-quality sound.",
    price: 249.99,
    discountPercentage: 5,
    rating: 4.8,
    stock: 200,
    category: "electronics",
    images: ["https://via.placeholder.com/300x300.png?text=AirPods"],
    sizes: ["One Size"],
    colors: ["white"],
  },
  {
    id: 4,
    title: "Nike Running Shoes",
    description: "Lightweight and comfortable shoes for running and training.",
    price: 119.99,
    discountPercentage: 20,
    rating: 4.6,
    stock: 120,
    category: "fashion",
    images: ["https://via.placeholder.com/300x300.png?text=Shoes"],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["red", "blue", "black"],
  },
  {
    id: 5,
    title: "Wooden Coffee Table",
    description: "Stylish wooden coffee table for living room decor.",
    price: 159.99,
    discountPercentage: 12,
    rating: 4.3,
    stock: 30,
    category: "furniture",
    images: ["https://via.placeholder.com/300x300.png?text=Coffee+Table"],
    sizes: ["Standard"],
    colors: ["brown", "oak"],
  },
  {
    id: 6,
    title: "Revlon Lipstick Set",
    description: "Bright and long-lasting lipstick collection.",
    price: 29.99,
    discountPercentage: 8,
    rating: 4.1,
    stock: 80,
    category: "beauty",
    images: ["https://via.placeholder.com/300x300.png?text=Lipstick"],
    sizes: ["Standard"],
    colors: ["red", "pink", "nude"],
  },
];
};