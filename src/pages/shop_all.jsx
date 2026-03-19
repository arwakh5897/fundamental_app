import React,{useState,useEffect} from "react";
import ProductsLayout from "../components/product_Layout/product_layout";
import { fetchProducts } from "../api/data";

const ShopAll = () => {
  const itemsPerPage = 16;
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);
  // const allItems = Array.from({ length: 80 }, (_, index) => ({
  //   id: index + 1,
  //   name: `MakeUp Product ${index + 1}`,
  //   price: Math.floor(Math.random() * 2500) + 1,
  //   discount: Math.floor(Math.random() * 30) + 1,
  //   Date: new Date(
  //     Date.now() -
  //       Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
  //   ),
  // }));

  return (
        <div>
            <img className="w-full" src="/assets/images/banner3.png"/>
            <ProductsLayout title="All Products" allItems={allItems} itemsPerPage={itemsPerPage} />
        </div>

)
};

export default ShopAll;