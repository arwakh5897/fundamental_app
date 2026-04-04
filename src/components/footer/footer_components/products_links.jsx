import React from "react";

const ProductsLinks = () => {
    return (
        <div className="text-lg">
             <h2 className="font-bold pb-4">Products Links</h2>
                <div className="flex flex-col text-sm md:text-lg gap-1">
                    <a href="/pages/shop_all" className="hover:underline">
                        All Products
                    </a>
                    <a href="/pages/shop_all" className="hover:underline">
                        New Arrivals
                    </a>
                    <a href="/pages/shop_all" className="hover:underline">
                        Best Sellers
                    </a>
                </div>
        </div>
    );
};
export default ProductsLinks;