import React,{useEffect, useState} from "react";
import ProductsLayout from "../../components/product_Layout/product_layout";
import { fetchProducts } from "../../api/data";
import { useParams } from "react-router-dom";

const ConcernLayout = () => {
  const itemsPerPage = 8;
  const [allItems, setProducts] = useState([]);
  const { type } = useParams();

  useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);

  const titles = {
    "casual-wear": "Casual Wear",
    "formal-wear": "Formal Wear",
    "sports-performance": "Sports Performance",
    "outdoor-hiking": "Outdoor Hiking",
    "lightweight": "Lightweight Shoes",
    "flat-feet": "Flat Feet Supports",
    "waterproof": "Waterproof Shoes",
    "party-wear": "Party Wear",
  };
  const title= titles[type] || "Products";
  const filterItems = allItems.filter(item=> item.category.toLowerCase() === title.toLowerCase());



    return (
            <ProductsLayout 
            allItems={filterItems} 
            title={title} 
            itemsPerPage={itemsPerPage} 
            cat={"By Concern"} />
    )
}
export default ConcernLayout;