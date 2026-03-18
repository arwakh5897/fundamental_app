import react,{use, useState} from "react";
import Banner from "../components/banners/banner";
import Pagination from "../components/pagination/pagination";
import Products from "../components/products/products";
import { usePagination } from "../hook/paginationHook";


const ByConcern = () => {
    const itemsPerPage = 8;
    const allItems = Array.from({ length: 30 }, (item, index) => ({
      id: index + 1,
      name: `MakeUp Product ${index + 1}` 
      }));
    const {currentPage, totalPages,visibleProducts, loadMore}= usePagination({allItems,itemsPerPage})

    return (
        <div>
            <img className="w-full" src="/assets/images/banner1.png"/>
            <h1 className="bg-menu-buttons md:text-2xl font-bold text-center py-2 md:py-4">CONCERN</h1>
            <Products products={visibleProducts}/>
            {currentPage < totalPages &&<Pagination loadMore={loadMore} />}
        </div>
    )
}
export default ByConcern;