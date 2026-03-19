import React, {useEffect , useState } from "react";
import Pagination from "../pagination/pagination";
import Products from "../products/products";
import { usePagination } from "../../hook/paginationHook";
import { fetchProducts } from "../../api/data";
const MakeUpTitle = () => {
  const itemsPerPage = 8;
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);
    const {currentPage, totalPages,visibleProducts, loadMore}= usePagination({allItems,itemsPerPage})


    return (
        <div id="new_arrival">
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

