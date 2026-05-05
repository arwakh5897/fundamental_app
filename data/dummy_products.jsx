const dummyProducts = [
  ...Array.from({ length: 20 }, (_, i) => {
    const id = i + 1;

    return {
      id,
      title: `Product ${id}`,
      description: "Demo product description",
      price: 1000 + i * 100,
      discount: 10,
      category: "Summer Collection",
      stock: 5,
      images: [
        `https://picsum.photos/300/300?random=${i + 1}`,
        `https://picsum.photos/300/300?random=${i + 2}`,
      ],
    };
  }),
];