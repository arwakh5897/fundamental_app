import React, {useEffect , useState } from "react";
import Pagination from "../pagination/pagination";
import Products from "../products/products";
import { usePagination } from "../../hook/paginationHook";
import { fetchProducts } from "../../api/data";
import { useNavigate } from "react-router-dom";
const MakeUpTitle = () => {
  const navigate = useNavigate();
  const itemsPerPage = 16;
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);
    const {currentPage, totalPages,visibleProducts, loadMore}= usePagination({allItems,itemsPerPage})
    const specifiedProducts = visibleProducts.slice(0 , 16)

    return (
        <div >
          <div className="bg-menu text-sm lg:text-lg text-center py-2 lg:py-4">
                KICK  
                <span className="font-semibold mx-2">MUST-HAVES</span>
          </div>
          <img className="w-full" src="/assets/images/banner3.png"/>
          <Products products={specifiedProducts}/>
         <div className="flex flex-col justify-center items-center py-4">
          <button
            className=" flex bg-buttons hover-bg-buttons justify-center items-center py-2 px-4 md:px-6 rounded-sm text-xs font-medium hover:opacity-90 hover:cursor-pointer transition"
            onClick={()=>navigate("/pages/shop_all")}
            >

            View All
          </button>
          </div>
          {/* {currentPage < totalPages && <Pagination loadMore={loadMore} />} */}

       </div>
  )
}
export default MakeUpTitle;

