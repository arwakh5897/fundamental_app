import React ,{useEffect,useState} from "react";
import { fetchProducts } from "../../api/data";
import Products from "../products/products";
const Ance = () => {
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);
   const specificProducts = allItems
  .sort((a, b) => b.avarage_rating- a.avarage_rating)
  .slice(0, 12);
      return (
        <div className="">
      <div className="bg-menu text-sm lg:text-lg text-center py-2 lg:py-4 mt-2">
            FOOTWARE
            <span className="font-semibold mx-2">ESSENTIALS</span>
        </div>
            {/* <img className="w-full"src="/assets/images/banner2.png"/> */}
      {/* <span className="text-heading font-semibold text-2xl">
        Footware Essestials
      </span> */}
            {/* Banner */}
      <div className="relative overflow-hidden group">
        
        {/* Image */}
        <img
          className="w-full h-[320px] lg:h-[520px]  object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
          src=  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2070"
          alt="Footwear Banner"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-4 sm:px-6 md:px-10 lg:px-20 max-w-3xl text-white">
            

            {/* Heading */}
            <h1
              className="mt-3 sm:mt-5
              text-2xl sm:text-4xl md:text-5xl lg:text-7xl
              font-black leading-tight"
            >
              FOOTWEAR
              <span className="block text-[rgb(193,172,160)]">
                ESSENTIALS
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-3 sm:mt-5
              text-xs sm:text-sm md:text-lg lg:text-xl
              text-gray-200 leading-5 sm:leading-7
              max-w-xl"
            >
              Discover premium sneakers, stylish casual shoes, and modern
              essentials crafted for comfort and everyday fashion.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-5 sm:mt-7">
              <button
                onClick={() => navigate("/pages/shop_all")}
                className="px-5 sm:px-6 py-2.5 sm:py-3
                rounded-full text-xs sm:text-sm font-semibold
                bg-buttons
                hover-bg-buttons
                hover:scale-105 transition-all duration-300"
              >
                Shop Now
              </button>

            </div>

          </div>
        </div>
      </div>
      <div>
          {  <Products products={specificProducts} />}
      </div>
    </div>
    )
}
export default Ance;