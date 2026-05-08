import React, {useEffect , useMemo, useState } from "react";
import { fetchProducts } from "../../api/data";
import ProductsLayout from "../../components/product_Layout/product_layout";

const NewProducts = () => {
  const itemsPerPage = 8;
  const [allItems, setProducts] = useState([]);
     useEffect(()=>{
      fetchProducts().then(setProducts)
     },[]);

     const latestItems = useMemo(()=>{
      return [...allItems].sort((a,b) => b.id - a.id).slice(0, 16);
     }, [allItems]);
     return (
            <ProductsLayout 
            allItems={latestItems} 
            title="New Products" 
            itemsPerPage={itemsPerPage} 
            cat={"New Arrivals"} 
            />
  );
};
export default NewProducts;