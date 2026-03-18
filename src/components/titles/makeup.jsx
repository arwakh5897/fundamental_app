import React, { useState } from "react";
import Pagination from "../pagination/pagination";
import Products from "../products/products";
const MakeUpTitle = () => {
   const [currentPage, setCurrentPage]= useState(1);

    const allProducts = Array.from({ length: 20 }, (item, index) => ({
      id: index + 1,
      name: `MakeUp Product ${index + 1}` 
      }));
    const productsPerPage = 8;
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    const visibleProducts = allProducts.slice(0, currentPage * productsPerPage);

    return (
        <div>
          <div className="bg-menu-buttons md:text-4xl text-center py-2 md:py-4">
                MAKEUP  
                <span className="font-bold mx-2">MUST-HAVES</span>
          </div>

          <img className="w-full" src="/assets/images/banner3.png"/>

          <Products products={visibleProducts}/>
          <div className="py-8">
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          </div>

       </div>
  )
}
export default MakeUpTitle;

