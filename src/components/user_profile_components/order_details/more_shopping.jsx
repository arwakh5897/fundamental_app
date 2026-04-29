import React, { useEffect, useState } from "react";
import ScrollingProducts from "../../products/scrolling_Products";
import { fetchProducts } from "../../../api/data";

const MoreShopping =()=>{
    const [allItems , setProducts] =useState([]);
    useEffect(()=>{
        fetchProducts().then(setProducts);
    },[]);
    return(
    <div className="py-6">
        <div className="flex flex-col">
            <h2 className="text-xs lg:text-xl">More Shopping</h2>
            <p className="h-[2px] w-20 lg:w-36 bg-buttons hover-bg-buttons"></p>
        </div>
    <ScrollingProducts allItems={allItems} />
    </div>
    )
}
export default MoreShopping;