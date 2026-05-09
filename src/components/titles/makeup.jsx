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
                              {/* <img className="w-full" src="/assets/images/banner3.png"/> */}
      {/* Banner */}
      <div className="relative overflow-hidden group">

        {/* Image */}
        <img
          className="w-full h-[320px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070"
          alt="Kick Must Haves"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-4 sm:px-8 lg:px-14 max-w-xl text-white">

            {/* Small Text */}
            <p className="text-[10px] sm:text-xs uppercase tracking-[3px] text-gray-200">
              Latest Sneakers
            </p>

            {/* Heading */}
            <h1
              className="mt-2
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold leading-tight"
            >
              KICK
              <span className="block text-[rgb(193,172,160)]">
                MUST-HAVES
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-3
              text-xs sm:text-sm md:text-base
              text-gray-100 leading-6"
            >
              Upgrade your style with premium sneakers and everyday footwear
              designed for comfort and performance.
            </p>

            {/* Button */}
            <button
              onClick={() => navigate("/pages/shop_all")}
              className="mt-5 px-5 sm:px-6 py-2.5 sm:py-3
              rounded-full text-xs sm:text-sm font-semibold
              bg-buttons
              hover-bg-buttons
              hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
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

