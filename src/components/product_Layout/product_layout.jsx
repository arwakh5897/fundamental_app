import react,{use, useState} from "react";
import Pagination from "../pagination/pagination";
import Products from "../products/products";
import { usePagination } from "../../hook/paginationHook";
import useFilter from "../../hook/filterHook";
import FilterUI from "../filterUI/filterUI";


const ProductsLayout = ({allItems,title,itemsPerPage}) => {
    const {sortedProducts, sortType, setSortType} = useFilter({allItems});
    const {currentPage, totalPages,visibleProducts, loadMore}= usePagination({allItems:sortedProducts,itemsPerPage});

    return (
        <div>
            <div className="flex justify-between items-center p-4 md:p-8">
                <h2 className="text-sm md:text-xl font-bold">{title}</h2>
                <FilterUI sortType={sortType} setSortType={setSortType}/>
            </div>
            <Products products={visibleProducts}/>
            {currentPage < totalPages &&<Pagination loadMore={loadMore} />}
        </div>
    )
}
export default ProductsLayout;