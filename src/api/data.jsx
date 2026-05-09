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


// export const placeOrder = async (orderData) =>{
//   const token= localStorage.getItem("token");
//   try{
//     const res = await fetch ("http://127.0.0.1:8000/api/orders" , {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`,
//         "Accept": "application/json",
//       },
//       body:JSON.stringify(orderData),
//     });
//     const data = await res.json();
//     return data;
//   } catch(err){
//     console.error("Order API error:" , err)
//     return null;
//   }
// };


// export const fetchOrders = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const res = await fetch("http://127.0.0.1:8000/api/orders", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`, // MUST
//       },
//     });

//     const data = await res.json();
//     return data.data;
//   } catch (err) {
//     console.error("Error fetching orders:", err);
//     return [];
//   }
// };


// utils/fetchProducts.js
// utils/fetchProducts.js


export const fetchProducts = async () => {
  return [
    ...Array.from({ length: 80 }, (_, i) => {
      const id = i + 1;

      const brands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance"];
      const models = ["Air Zoom", "Ultraboost", "RS-X", "Classic Run", "Flex Pro", "Runner X"];

      const brand = brands[i % brands.length];
      const model = models[i % models.length];

      return {
        id,
        title: `${brand} ${model} ${id}`,
        description: `Premium ${brand.toLowerCase()} running and lifestyle shoes designed for comfort, durability, and modern style.`,
        price: 82 + (i * 5),
        discount: (i % 5) * 5,
        avarage_rating: (4 + (i % 10) * 0.1).toFixed(1),
        count: 20 + i,
        stock: i % 2 === 0 ? 0 : 2 + (i * 3),
        category: ["Casual Wear","Formal Wear","Party Wear","Sneakers", "Boots" , "Sandals", "Heels" , "Summer Collection" , "Winter Sale"][i % 9],

        sizes: ["6", "7", "8", "9", "10", "11"].slice(0, (i % 6) + 3),
        colors: ["black", "white", "blue", "red", "grey"].slice(0, (i % 5) + 2),

        images: [
          `https://picsum.photos/300/300?random=${i * 3 + 1}`,
          `https://picsum.photos/300/300?random=${i * 3 + 2}`,
          `https://picsum.photos/300/300?random=${i * 3 + 3}`,
          `https://picsum.photos/300/300?random=${i * 3 + 4}`,
          `https://picsum.photos/300/300?random=${i * 3 + 5}`,
        ],

        reviews: [
          {
            name: "Ali",
            rating: 5,
            comment: "Bohat comfortable shoes hain, daily use ke liye best.",
            date: "2 April 2026",
          },
          {
            name: "Zain",
            rating: 4,
            comment: "Quality achi hai lekin thora expensive lagta hai.",
            date: "1 April 2026",
          },
        ],
      };
    }),
  ];
};


const shoeImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",

  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2070",

  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2070",

  "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2074",

  "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=2070",

  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2070",

  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2070",

  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2070",

  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2070",

  "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2070"
];