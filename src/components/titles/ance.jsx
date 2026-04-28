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
  .slice(0, 8);
      return (
        <div>
      <div className="bg-menu lg:text-4xl text-center py-2 lg:py-4">
            FOOTWARE
            <span className="font-semibold mx-2">ESSENTIALS</span>
        </div>
               <img className="w-full"src="/assets/images/banner2.png"/>
          {  <Products products={specificProducts} />}
    </div>
    )
}
export default Ance;