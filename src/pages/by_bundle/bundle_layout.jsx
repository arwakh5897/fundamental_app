import React,{useEffect, useState} from "react";
import ProductsLayout from "../../components/product_Layout/product_layout";
import { fetchProducts } from "../../api/data";
import { useParams } from "react-router-dom";

const BundleLayout = () => {
  const itemsPerPage = 8;
  const [allItems, setProducts] = useState([]);
  const { type } = useParams();

  useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);
     const titles = {
    "summer-collection": "Summer Collection",
    "winter-sale": "Winter Sale",
  };
  const title= titles[type] || "Products";
  const filteredItems = allItems.filter(item => item.category.toLowerCase() === title.toLowerCase());
  
    return (
        <div>
            <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">BY BUNDLE</h1>
            <ProductsLayout allItems={filteredItems} title={title} itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default BundleLayout;