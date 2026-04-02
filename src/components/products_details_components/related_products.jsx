import React, { useEffect, useState } from "react";
import ScrollingProducts from "../products/scrolling_Products";
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
            <p className="h-[2px] w-36 bg-buttons hover-bg-buttons"></p>
        </div>
    <ScrollingProducts allItems={allItems}/>
    </div>
    )
}
export default RelatedProducts;