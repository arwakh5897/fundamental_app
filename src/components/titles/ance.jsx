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
            {/* <img className="w-full rounded-2xl"src="/assets/images/banner1.png"/> */}
      {/* <div className="bg-menu text-sm lg:text-lg text-center py-2 lg:py-4 mt-2">
            FOOTWARE
            <span className="font-semibold mx-2">ESSENTIALS</span>
        </div> */}

{/* Stylish Ecommerce Heading */}
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black via-gray-900 to-black py-6 lg:py-10 mt-4 shadow-xl">
  
  {/* Background Glow */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 text-center px-4">
    
    {/* Small Tag */}
    <span className="inline-block text-[10px] lg:text-xs tracking-[4px] uppercase bg-white text-black px-4 py-2 rounded-full font-semibold">
      Trending Collection
    </span>

    {/* Main Title */}
    <h1 className="text-3xl lg:text-6xl font-extrabold text-white mt-4 tracking-wide">
      FOOTWEAR
      <span className="text-yellow-400 ml-3">ESSENTIALS</span>
    </h1>

    {/* Subtitle */}
    <p className="text-gray-300 text-sm lg:text-lg max-w-2xl mx-auto mt-4 leading-7">
      Step into comfort and style with our premium collection of sneakers,
      casual wear, and everyday essentials designed for modern fashion.
    </p>

    {/* Decorative Line */}
    <div className="flex justify-center mt-6">
      <div className="w-24 h-1 rounded-full bg-yellow-400"></div>
    </div>
  </div>
</div>
          {  <Products products={specificProducts} />}
    </div>
    )
}
export default Ance;