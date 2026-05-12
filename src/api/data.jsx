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
        description: `Premium ${brand.toLowerCase()} running and lifestyle shoes designed for comfort, durability, and modern style. 
Crafted with high-quality materials to provide long-lasting performance and everyday reliability. 
These shoes feature a lightweight construction that helps reduce foot fatigue during long walks or workouts. 
The breathable upper mesh allows proper airflow to keep your feet cool and fresh throughout the day. 
Soft inner cushioning provides superior comfort for daily wear, gym sessions, and outdoor activities. 
Designed with advanced sole grip technology for enhanced traction on multiple surfaces. 
Perfect for running, jogging, training, casual outings, and active lifestyles. 
The flexible outsole ensures smooth movement and natural foot support while walking or exercising. 
Modern and stylish design makes these shoes easy to pair with sportswear or casual outfits. 
Shock-absorbing midsoles help reduce pressure on knees and ankles during movement. 
Built to support both athletic performance and all-day comfort for every age group. 
Durable stitching and premium finishing add extra strength and long-term usability. 
Available in multiple sizes and trendy color combinations to match your personal style. 
The ergonomic fit provides excellent balance, stability, and confidence with every step. 
Easy-to-clean material helps maintain a fresh and polished appearance for a long time. 
Suitable for indoor and outdoor activities including fitness training and daily commuting. 
Engineered to provide a secure fit with comfortable lace support and flexible movement. 
These shoes combine fashion and functionality to meet the demands of modern lifestyles. 
Premium cushioning technology delivers extra softness and enhanced walking comfort. 
Ideal choice for athletes, students, professionals, and anyone seeking versatile footwear. 
The stylish silhouette and sleek detailing create a premium and fashionable look. 
Carefully designed to offer maximum support during intense activities and daily use. 
Reliable performance and superior comfort make these shoes a must-have for every wardrobe. 
Experience a perfect blend of innovation, comfort, durability, and timeless style with every pair.`,
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