const dummyOrders = [
  {
    id: 1,
    status: "pending",
    total_price: "2500",
    currentLocation: "Lahore Warehouse",
    lastUpdate: "Today 2:00 PM",
    estimatedDelivery: "10 May 2026",
    items: [
      {
        product_name: "Nike Air",
        quantity: 1,
        price: "2500",
        size: "M",
        color: "Black",
        product: {
          images: ["https://picsum.photos/200?random=1"],
        },
      },
    ],
  },
  {
    id: 2,
    status: "delivered",
    total_price: "4200",
    items: [
      {
        product_name: "Adidas Boost",
        quantity: 2,
        price: "2100",
        size: "L",
        color: "White",
        product: {
          images: ["https://picsum.photos/200?random=2"],
        },
      },
    ],
  },
];