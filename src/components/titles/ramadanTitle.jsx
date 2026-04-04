import React, {useEffect , useState } from "react";
import { fetchProducts } from "../../api/data";
import ScrollingProducts from "../products/scrolling_Products";

const RamadanTitle = () => {
  const [allItems, setProducts] = useState([]);
     useEffect(()=>{
      fetchProducts().then(setProducts)
     },[]);
  return (
    <div id="ramadan">
      <div className="bg-menu lg:text-4xl text-center py-2 lg:py-4">
        RAMADAN
        <span className="font-semibold mx-2">BLESSINGS</span>
      </div>
      <ScrollingProducts allItems={allItems}/>
    </div>
  );
};

export default RamadanTitle;