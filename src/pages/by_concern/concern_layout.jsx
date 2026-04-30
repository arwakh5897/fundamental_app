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
        <div>
            <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">BY CONCER</h1>
            <ProductsLayout allItems={filterItems} title={title} itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default ConcernLayout;