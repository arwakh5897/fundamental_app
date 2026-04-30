import React, { useEffect, useState } from "react";
import ScrollingProducts from "../products/scrolling_Products";
import { fetchProducts } from "../../api/data";
import { useParams } from "react-router-dom";

const RelatedProducts =()=>{
    const [allItems , setProducts] =useState([]);
    useEffect(()=>{
        fetchProducts().then(setProducts);
    },[]);
    const { id } = useParams();
    const currentItem = allItems.find(item => item.id === parseInt(id));
    const relatedItems = allItems.filter((item) => item.category === currentItem.category && item.id !== parseInt(id)).slice(0, 10);
    return(
    <div>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl">Related Products</h2>
            <p className="h-[2px] w-36 bg-buttons hover-bg-buttons"></p>
        </div>
    <ScrollingProducts allItems={relatedItems}/>
    </div>
    )
}
export default RelatedProducts;