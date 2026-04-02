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


// utils/fetchProducts.js
// utils/fetchProducts.js
export const fetchProducts = async () => {
  return [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description: `
Step into the future of smartphones with the iPhone 16 Pro Max. Featuring a stunning titanium body, 4K Dolby Vision video, and the powerful A18 Pro chip, this device is designed for tech enthusiasts, professionals, content creators, and everyday users in the UAE who demand premium performance and style.

Key Features & Details:
Stunning Titanium Design – Strong, lightweight, and ultra-durable with a 6.9-inch Super Retina XDR display and next-generation Ceramic Shield that’s 2x tougher than any smartphone glass.
Total Camera Control – Quickly access camera tools, zoom, and depth-of-field features for perfect shots anytime.
48MP Ultra Wide & 5x Telephoto Camera – Capture breathtaking macro, wide-angle, and distant shots in incredible detail.
Pro Video Recording – Shoot cinematic 4K 120 fps Dolby Vision videos with studio-quality audio using the 48MP Fusion camera.
Photographic Styles – Customize your photos with advanced creative filters that can be reversed anytime.
A18 Pro Chip Power – Seamless graphics performance for AAA gaming, advanced photo, and video features.
Extended Battery Life – Up to 33 hours of video playback with fast USB-C and MagSafe wireless charging.
iOS 18 Customization – Tint home screen icons, add animations, and manage photos easily with redesigned apps.
Vital Safety Features – Crash Detection can alert emergency services in case of a severe car accident.

Why This iPhone 16 Pro Max is Trending in the PAK ?
Most sought-after premium smartphone in Dubai and across the UAE
Ideal for content creators, business professionals, and tech-savvy users
Cutting-edge camera, video, and gaming performance
Sleek titanium design combined with durable build and advanced features
Perfect for iPhone enthusiasts upgrading to the latest model

Why Buy from Hub Al Souq ?
Delivery within 72 working hours across the UAE
Secure payments via authentic payment gateways
Cash on Delivery (COD) available
Trusted UAE online marketplace supporting verified local sellers
Quality-checked products with customer satisfaction guarantee

Upgrade to the ultimate smartphone experience.
Order your iPhone 16 Pro Max now from Hub Al Souq and enjoy delivery within 72 working hours anywhere in the UAE!      
      `,
      price: 9.99,
      discountPercentage: 10,
      rating: 4.2,
      count: 130,
      stock: 99,
      category: "beauty",
      sizes: ["24", "32", "40"],
      colors: ["black", "brown"],
      thumbnail: "https://picsum.photos/300/300?random=1",
      hoverImage: "https://picsum.photos/300/300?random=2",
      subImages: [
        "https://picsum.photos/300/300?random=3",
        "https://picsum.photos/300/300?random=4",
        "https://picsum.photos/300/300?random=5",
        "https://picsum.photos/300/300?random=6",
      ],
    },
    {
      id: 2,
      title: "Knoll Executive Chair",
      description: "Ergonomic office chair.",
      price: 299.99,
      discountPercentage: 15,
      rating: 4.5,
      count: 30,
      stock: 45,
      category: "furniture",
      sizes: ["Standard"],
      colors: ["black", "grey"],
      thumbnail: "https://picsum.photos/300/300?random=5",
      hoverImage: "https://picsum.photos/300/300?random=6",
      subImages: [
        "https://picsum.photos/300/300?random=7",
        "https://picsum.photos/300/300?random=8",
        "https://picsum.photos/300/300?random=9",
      ],
    },
    {
      id: 3,
      title: "Apple AirPods Pro",
      description: "Noise-cancelling earbuds.",
      price: 249.99,
      discountPercentage: 5,
      rating: 4.8,
      count: 129,
      stock: 200,
      category: "electronics",
      sizes: ["One Size"],
      colors: ["white"],
      thumbnail: "https://picsum.photos/300/300?random=10",
      hoverImage: "https://picsum.photos/300/300?random=11",
      subImages: [
        "https://picsum.photos/300/300?random=12",
        "https://picsum.photos/300/300?random=13",
      ],
    },
    {
      id: 4,
      title: "Nike Running Shoes",
      description: "Lightweight running shoes.",
      price: 119.99,
      discountPercentage: 20,
      rating: 4.6,
      count: 10,
      stock: 120,
      category: "fashion",
      sizes: ["7", "8", "9", "10"],
      colors: ["red", "blue", "black"],
      thumbnail: "https://picsum.photos/300/300?random=14",
      hoverImage: "https://picsum.photos/300/300?random=15",
      subImages: [
        "https://picsum.photos/300/300?random=16",
        "https://picsum.photos/300/300?random=17",
      ],
    },
    {
      id: 5,
      title: "Wooden Coffee Table",
      description: "Stylish living room table.",
      price: 159.99,
      discountPercentage: 12,
      rating: 4.3,
      count: 16,
      stock: 30,
      category: "furniture",
      sizes: ["Standard"],
      colors: ["brown", "oak"],
      thumbnail: "https://picsum.photos/300/300?random=18",
      hoverImage: "https://picsum.photos/300/300?random=19",
      subImages: [
        "https://picsum.photos/300/300?random=20",
        "https://picsum.photos/300/300?random=21",
      ],
    },
    {
      id: 6,
      title: "Revlon Lipstick Set",
      description: "Long-lasting lipstick.",
      price: 29.99,
      discountPercentage: 8,
      rating: 4.1,
      count: 22,
      stock: 80,
      category: "beauty",
      sizes: ["Standard"],
      colors: ["red", "pink"],
      thumbnail: "https://picsum.photos/300/300?random=22",
      hoverImage: "https://picsum.photos/300/300?random=23",
      subImages: [
        "https://picsum.photos/300/300?random=24",
        "https://picsum.photos/300/300?random=25",
      ],
    },
    {
      id: 7,
      title: "Gaming Mouse",
      description: "RGB high precision mouse.",
      price: 49.99,
      discountPercentage: 18,
      rating: 4.7,
      count: 50,
      stock: 150,
      category: "electronics",
      sizes: ["Standard"],
      colors: ["black"],
      thumbnail: "https://picsum.photos/300/300?random=26",
      hoverImage: "https://picsum.photos/300/300?random=27",
      subImages: [
        "https://picsum.photos/300/300?random=28",
        "https://picsum.photos/300/300?random=29",
      ],
    },
    {
      id: 8,
      title: "Leather Wallet",
      description: "Premium leather wallet.",
      price: 39.99,
      discountPercentage: 10,
      rating: 4.4,
      count: 80,
      stock: 200,
      category: "fashion",
      sizes: ["Standard"],
      colors: ["brown", "black"],
      thumbnail: "https://picsum.photos/300/300?random=30",
      hoverImage: "https://picsum.photos/300/300?random=31",
      subImages: [
        "https://picsum.photos/300/300?random=32",
        "https://picsum.photos/300/300?random=33",
      ],
    },
    {
      id: 9,
      title: "Smart Watch",
      description: "Fitness tracking smartwatch.",
      price: 199.99,
      discountPercentage: 22,
      rating: 4.6,
      count: 60,
      stock: 90,
      category: "electronics",
      sizes: ["Standard"],
      colors: ["black", "silver"],
      thumbnail: "https://picsum.photos/300/300?random=34",
      hoverImage: "https://picsum.photos/300/300?random=35",
      subImages: [
        "https://picsum.photos/300/300?random=36",
        "https://picsum.photos/300/300?random=37",
      ],
    },
    {
      id: 10,
      title: "Backpack",
      description: "Durable travel backpack.",
      price: 59.99,
      discountPercentage: 14,
      rating: 4.3,
      count: 45,
      stock: 110,
      category: "fashion",
      sizes: ["Standard"],
      colors: ["blue", "black"],
      thumbnail: "https://picsum.photos/300/300?random=38",
      hoverImage: "https://picsum.photos/300/300?random=39",
      subImages: [
        "https://picsum.photos/300/300?random=40",
        "https://picsum.photos/300/300?random=41",
      ],
    },
  ];
};