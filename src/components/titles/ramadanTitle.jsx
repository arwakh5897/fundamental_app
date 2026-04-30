import React, {useEffect , useState } from "react";
import { fetchProducts } from "../../api/data";
import ScrollingProducts from "../products/scrolling_Products";

const RamadanTitle = () => {
  const [allItems, setProducts] = useState([]);
     useEffect(()=>{
      fetchProducts().then(setProducts)
     },[]);
     const latestItems = [...allItems].sort((a,b) => b.id - a.id).slice(0, 16);
     console.log("Latest Items:", latestItems);
  return (
    <div id="ramadan">
      <div className="bg-menu lg:text-4xl text-center py-2 lg:py-4">
        NEW
        <span className="font-semibold mx-2">ARRIVAL</span>
      </div>
      <ScrollingProducts allItems={latestItems}/>
    </div>
  );
};

export default RamadanTitle;