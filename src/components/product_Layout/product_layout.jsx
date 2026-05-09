import react,{use, useState} from "react";
import Pagination from "../pagination/pagination";
import Products from "../products/products";
import { usePagination } from "../../hook/paginationHook";
import useFilter from "../../hook/filterHook";
import FilterUI from "../filterUI/filterUI";


const ProductsLayout = ({allItems,title,itemsPerPage , cat}) => {
    
    const {sortedProducts, sortType, setSortType} = useFilter({allItems});
    const {currentPage, totalPages,visibleProducts, loadMore}= usePagination({allItems:sortedProducts,itemsPerPage});

    return (
        <div>
          {/* <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">{cat}</h1> */}
            <div className="flex justify-between items-center py-4 lg:p-8">
                <h2 className="text-sm lg:text-xl font-bold">{title}</h2>
                <FilterUI sortType={sortType} setSortType={setSortType}/>
            </div>
            <Products products={visibleProducts} />
            {currentPage < totalPages &&<Pagination loadMore={loadMore} />}
        </div>
    )
}
export default ProductsLayout;