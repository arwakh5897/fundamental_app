import React, { useEffect, useState } from "react";
import ScrollingCard from "../card/scrolling_card";
import { fetchProducts } from "../../api/data";

const RelatedProducts =()=>{
    const [allItems , setProducts] =useState([]);
    useEffect(()=>{
        fetchProducts().then(setProducts);
    },[]);
    return(
    <div>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl">Related Products</h2>
            <p className="h-[2px] w-36 bg-menu-buttons"></p>
        </div>
                    <ScrollingCard allItems={allItems}/>
    </div>
    )
}
export default RelatedProducts;