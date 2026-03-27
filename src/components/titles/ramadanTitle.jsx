import React, {useEffect , useState } from "react";
import Card from "../card/card";
import LeftArrow from "../buttons/leftArrow";
import RightArrow from "../buttons/rightArrow";
import { fetchProducts } from "../../api/data";
import ScrollingCard from "../card/scrolling_card";

const RamadanTitle = () => {
  const [allItems, setProducts] = useState([]);
     useEffect(()=>{
      fetchProducts().then(setProducts)
     },[]);
  return (
    <div id="ramadan">
      <div className="bg-menu-buttons md:text-4xl text-center py-2 md:py-4">
        RAMADAN
        <span className="font-bold mx-2">BLESSINGS</span>
      </div>
      <ScrollingCard allItems={allItems}/>
    </div>
  );
};

export default RamadanTitle;