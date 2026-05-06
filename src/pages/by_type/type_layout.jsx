import React,{useEffect, useState} from "react";
import ProductsLayout from "../../components/product_Layout/product_layout";
import { fetchProducts } from "../../api/data";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/common/breadcrumb";

const TypeLayout = () => {
  const itemsPerPage = 8;
  const [allItems, setProducts] = useState([]);
  const { type } = useParams();

  useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);

  const titles = {
    sneakers: "Sneakers",
    boots: "Boots",
    sandals: "Sandals",
    loafers: "Loafers",
    heels: "Heels",
  };
  const title= titles[type] || "Products";
  const filterItems = allItems.filter(item=> item.category.toLowerCase() === title.toLowerCase());
  console.log("Filtered Items:" , filterItems);


    return (
            <ProductsLayout 
            allItems={filterItems} 
            title={title} 
            itemsPerPage={itemsPerPage} 
            cat={"By Type"} />
    )
}
export default TypeLayout;