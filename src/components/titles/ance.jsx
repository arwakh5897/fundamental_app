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
            <img className="w-full"src="/assets/images/banner2.png"/>
      {/* <span className="text-heading font-semibold text-2xl">
        Footware Essestials
      </span> */}
          {  <Products products={specificProducts} />}
    </div>
    )
}
export default Ance;