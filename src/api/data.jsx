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
//   try{
//     const res = await fetch ("http://127.0.0.1:8000/api/orders" , {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
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
// }


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
        rating: (4 + (i % 10) * 0.1).toFixed(1),
        count: 20 + i,
        stock: i % 2 === 0 ? 0 : 2 + (i * 3),
        category: "shoes",

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