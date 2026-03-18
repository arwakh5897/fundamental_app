import React, { useState } from "react";
import Pagination from "../pagination/pagination";
import Products from "../products/products";
import { usePagination } from "../../hook/paginationHook";
const MakeUpTitle = () => {
  const itemsPerPage = 8;
    const allItems = Array.from({ length: 15 }, (item, index) => ({
      id: index + 1,
      name: `MakeUp Product ${index + 1}` 
      }));
    const {currentPage, totalPages,visibleProducts, loadMore}= usePagination({allItems,itemsPerPage})


    return (
        <div>
          <div className="bg-menu-buttons md:text-4xl text-center py-2 md:py-4">
                MAKEUP  
                <span className="font-bold mx-2">MUST-HAVES</span>
          </div>
          <img className="w-full" src="/assets/images/banner3.png"/>
          <Products products={visibleProducts}/>
          {currentPage < totalPages && <Pagination loadMore={loadMore} />}

       </div>
  )
}
export default MakeUpTitle;

