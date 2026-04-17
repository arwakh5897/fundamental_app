import React from "react";

const ProductsLinks = () => {
    return (
        <div className="text-lg">
             {/* <h2 className="font-bold pb-4">Products Links</h2>
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
                </div> */}
                 <div className="mb-6 w-56">
          <p className="text-[11px] text-halfWhite mb-2 px-2 tracking-widest">
            Products Links
          </p>

          <div className="space-y-2 bg-halfWhite p-2 rounded-2xl">

            <div
            //   onClick={() => setActiveMenu("concern")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>All Products</span>
            </div>

            <div
            //   onClick={() => setActiveMenu("type")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>New Arrivals</span>
            </div>
                        <div
            //   onClick={() => setActiveMenu("type")}
              className={" cursor-pointer hover-bg-box"}
            >
              <span>Best Sellers</span>
            </div>
          </div>
        </div>
        </div>
    );
};
export default ProductsLinks;