import react,{use, useState} from "react";
import Pagination from "../components/pagination/pagination";
import Products from "../components/products/products";
import { usePagination } from "../hook/paginationHook";
import useFilter from "../hook/filterHook";
import FilterUI from "../components/filterUI/filterUI";


const ShopAll = () => {
    const itemsPerPage = 16;
    const allItems = Array.from({ length: 80 }, (item, index) => ({
      id: index + 1,
      name: `MakeUp Product ${index + 1}`, 
      price: Math.floor(Math.random() * 2500) + 1,
      Date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
    }));
    const {sortedProducts, sortType, setSortType} = useFilter({allItems});
    const {currentPage, totalPages,visibleProducts, loadMore}= usePagination({allItems:sortedProducts,itemsPerPage});

    return (
        <div>
            <img className="w-full" src="/assets/images/banner3.png"/>
            <div className="flex justify-between items-center p-4 md:p-8">
                <h2 className="text-xl font-bold">All Products</h2>
                <FilterUI sortType={sortType} setSortType={setSortType}/>
            </div>
            <Products products={visibleProducts}/>
            {currentPage < totalPages &&<Pagination loadMore={loadMore} />}
        </div>
    )
}
export default ShopAll;