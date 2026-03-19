import React from "react";

const ProductsLinks = () => {
    return (
        <div className="text-lg">
             <h2 className="font-bold pb-4">Products Links</h2>
                <div className="flex flex-col gap-1">
                    <a href="/pages/shop_all" className="hover:underline">
                        All Products
                    </a>
                    <a href="/pages/new_arrivals" className="hover:underline">
                        New Arrivals
                    </a>
                    <a href="/pages/best_sellers" className="hover:underline">
                        Best Sellers
                    </a>
                </div>
        </div>
    );
};
export default ProductsLinks;