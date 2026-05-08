import React from "react";

const ProductsLinks = () => {

  const links = [
    { name: "All Products", key: "all", href: "/pages/shop_all" },
    { name: "New Arrivals", key: "new", href: "/pages/new_products" },
    { name: "Trending Stuff", key: "best", href: "/pages/trending_products" },
  ];

  return (
    <div className="text-lg">
      <div className="box">
        <p className="box-heading">
          Products Links
        </p>

        <div className="box-container">

          {links.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="box-item"
            >
              <span>{item.name}</span>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProductsLinks;