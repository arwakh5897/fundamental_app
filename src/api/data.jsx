// utils/fetchProducts.js
// export const fetchProducts = async () => {
//   try { 
//     const res = await fetch("http://127.0.0.1:8000/api/products");
//     const data = await res.json();
//     return data.data;
//   } catch (err) {
//     console.error("API fetch error:", err);
//     return [];
//   }
// };


// utils/fetchProducts.js
// utils/fetchProducts.js

export const fetchProducts = async () => {
  return [
    {
      id: 1,
      title: "Nike Air Zoom Pegasus",
      description: "Lightweight running shoes designed for everyday training with responsive cushioning.",
      price: 120,
      discount: 10,
      rating: 4.7,
      count: 90,
      stock: 50,
      category: "shoes",
      size: ["7", "8", "9", "10", "11"],
      color: ["black", "blue"],
      thumbnail: "https://picsum.photos/300/300?random=1",
      hoverImage: "https://picsum.photos/300/300?random=2",
      subImages: ["https://picsum.photos/300/300?random=3"],
      reviews: [
        {
          name: "Ali",
          rating: 5,
          comment: "Running ke liye perfect shoes hain, bohat comfortable.",
          date: "2 April 2026",
        },
        {
          name: "Zain",
          rating: 4,
          comment: "Grip achi hai lekin price thoda high hai.",
          date: "1 April 2026",
        },
      ],
    },
    {
      id: 2,
      title: "Adidas Ultraboost 22",
      description: "Premium running shoes with Boost cushioning for maximum energy return.",
      price: 180,
      discount: 15,
      rating: 4.8,
      count: 120,
      stock: 70,
      category: "shoes",
      size: ["7", "8", "9", "10"],
      color: ["white", "black"],
      thumbnail: "https://picsum.photos/300/300?random=4",
      hoverImage: "https://picsum.photos/300/300?random=5",
      subImages: ["https://picsum.photos/300/300?random=6"],
      reviews: [
        {
          name: "Usman",
          rating: 5,
          comment: "Best cushioning ever, long runs ke liye zabardast.",
          date: "3 April 2026",
        },
        {
          name: "Hamza",
          rating: 4,
          comment: "Design aur comfort dono top class hain.",
          date: "2 April 2026",
        },
      ],
    },
    {
      id: 3,
      title: "Puma RS-X Sneakers",
      description: "Stylish sneakers with bold design and superior comfort.",
      price: 110,
      discount: 12,
      rating: 4.5,
      count: 75,
      stock: 60,
      category: "shoes",
      size: ["6", "7", "8", "9"],
      color: ["red", "black"],
      thumbnail: "https://picsum.photos/300/300?random=7",
      hoverImage: "https://picsum.photos/300/300?random=8",
      subImages: ["https://picsum.photos/300/300?random=9"],
      reviews: [
        {
          name: "Bilal",
          rating: 5,
          comment: "Street style ke liye perfect sneakers hain 🔥",
          date: "4 April 2026",
        },
        {
          name: "Saad",
          rating: 4,
          comment: "Design unique hai aur comfortable bhi.",
          date: "3 April 2026",
        },
      ],
    },
    {
      id: 4,
      title: "Nike Revolution 6",
      description: "Affordable running shoes with breathable mesh upper.",
      price: 80,
      discount: 20,
      rating: 4.3,
      count: 50,
      stock: 100,
      category: "shoes",
      size: ["7", "8", "9", "10"],
      color: ["grey", "black"],
      thumbnail: "https://picsum.photos/300/300?random=10",
      hoverImage: "https://picsum.photos/300/300?random=11",
      subImages: ["https://picsum.photos/300/300?random=12"],
      reviews: [
        {
          name: "Ahmad",
          rating: 4,
          comment: "Budget friendly aur comfortable hain.",
          date: "5 April 2026",
        },
        {
          name: "Tariq",
          rating: 3,
          comment: "Daily use ke liye theek hain.",
          date: "4 April 2026",
        },
      ],
    },
    {
      id: 5,
      title: "Adidas Superstar",
      description: "Classic lifestyle sneakers with iconic shell toe design.",
      price: 95,
      discount: 10,
      rating: 4.6,
      count: 110,
      stock: 85,
      category: "shoes",
      size: ["6", "7", "8", "9", "10"],
      color: ["white", "black"],
      thumbnail: "https://picsum.photos/300/300?random=13",
      hoverImage: "https://picsum.photos/300/300?random=14",
      subImages: ["https://picsum.photos/300/300?random=15"],
      reviews: [
        {
          name: "Hassan",
          rating: 5,
          comment: "Classic look, har outfit ke sath match ho jata hai.",
          date: "6 April 2026",
        },
        {
          name: "Imran",
          rating: 4,
          comment: "Quality bohat achi hai.",
          date: "5 April 2026",
        },
      ],
    },
    {
      id: 6,
      title: "Puma Future Rider",
      description: "Retro style sneakers with lightweight cushioning.",
      price: 90,
      discount: 8,
      rating: 4.4,
      count: 65,
      stock: 40,
      category: "shoes",
      size: ["7", "8", "9"],
      color: ["blue", "yellow"],
      thumbnail: "https://picsum.photos/300/300?random=16",
      hoverImage: "https://picsum.photos/300/300?random=17",
      subImages: ["https://picsum.photos/300/300?random=18"],
      reviews: [
        {
          name: "Farhan",
          rating: 5,
          comment: "Retro vibe bohat achi lagti hai 👌",
          date: "7 April 2026",
        },
        {
          name: "Raza",
          rating: 4,
          comment: "Lightweight aur stylish hain.",
          date: "6 April 2026",
        },
      ],
    },
  ];
};