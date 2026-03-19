import React ,{useEffect,useState} from "react";
import { fetchProducts } from "../../api/data";
import Products from "../products/products";
const Ance = () => {
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);
   const specificProducts = allItems.slice(0,8)
  
      return (
        <div>
      <div className="bg-menu-buttons md:text-4xl text-center py-2 md:py-4">
            ANCE
            <span className="font-bold mx-2">ESSENTIALS</span>
        </div>
               <img className="w-full"src="/assets/images/banner2.png"/>
          {  <Products products={specificProducts} />}
    </div>
    )
}
export default Ance;