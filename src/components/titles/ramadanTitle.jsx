import React, {useEffect , useMemo, useState } from "react";
import { fetchProducts } from "../../api/data";
import ScrollingProducts from "../products/scrolling_Products";

const RamadanTitle = () => {
  const [allItems, setProducts] = useState([]);
     useEffect(()=>{
      fetchProducts().then(setProducts)
     },[]);

     const latestItems = useMemo(()=>{
      return [...allItems].sort((a,b) => b.id - a.id).slice(0, 16);
     }, [allItems]);
     return (
    <div id="ramadan">
      <div className="bg-menu text-sm lg:text-lg text-center py-2 lg:py-4">
        NEW
        <span className="font-semibold mx-2">ARRIVALS</span>
      </div>
            {/* <img className="w-full"src="/assets/images/banner1.png"/> */}

      {/* <span className="text-heading px-4 font-semibold text-sm lg:text-sm lg:text-2xl">
        New Arrivals
      </span> */}
      <div className="">
         <ScrollingProducts allItems={latestItems}/>
      </div>
    </div>
  );
};

export default RamadanTitle;