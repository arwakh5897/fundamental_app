import React,{useEffect, useState} from "react";
import ProductsLayout from "../../components/product_Layout/product_layout";
import { fetchProducts } from "../../api/data";

const Casual = () => {
    const itemsPerPage = 8;
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);

    return (
        <div>
            <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">BY CONCER</h1>
            <ProductsLayout allItems={allItems} title="Casual Wear" itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default Casual;