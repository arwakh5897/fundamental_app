import react,{use, useState} from "react";
import Banner from "../components/banners/banner";
import Pagination from "../components/pagination/pagination";
import VerticalProducts from "../components/products/verticalProducts";
import Products from "../components/products/products";
import { usePagination } from "../hook/paginationHook";


const ShopAll = () => {
    const itemsPerPage = 16;
    const allItems = Array.from({ length: 80 }, (item, index) => ({
      id: index + 1,
      name: `MakeUp Product ${index + 1}` 
      }));
    const {currentPage, totalPages,visibleProducts, loadMore}= usePagination({allItems,itemsPerPage})

    return (
        <div>
            <img className="w-full" src="/assets/images/banner3.png"/>
            <Products products={visibleProducts}/>
            {currentPage < totalPages &&<Pagination loadMore={loadMore} />}
        </div>
    )
}
export default ShopAll;