import React ,{useEffect,useState} from "react";
import { fetchProducts } from "../../api/data";
import Products from "../products/products";
const Ance = () => {
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);
   const specificProducts = allItems
  .sort((a, b) => b.rating.rate - a.rating.rate) // highest rating first
  .slice(0, 8); // top 8
      return (
        <div>
      <div className="bg-menu-buttons md:text-4xl text-center py-2 md:py-4">
            FOOTWARE
            <span className="font-bold mx-2">ESSENTIALS</span>
        </div>
               <img className="w-full"src="/assets/images/banner2.png"/>
          {  <Products products={specificProducts} />}
    </div>
    )
}
export default Ance;