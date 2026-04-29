import React,{useEffect, useState} from "react";
import ProductsLayout from "../../components/product_Layout/product_layout";
import { fetchProducts } from "../../api/data";
import { useParams } from "react-router-dom";

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



    return (
        <div>
            <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">BY TYPE</h1>
            <ProductsLayout allItems={allItems} title={title} itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default TypeLayout;