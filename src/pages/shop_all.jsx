import React,{useState,useEffect} from "react";
import ProductsLayout from "../components/product_Layout/product_layout";
import { fetchProducts } from "../api/data";
import { useSearchParams } from "react-router-dom";

const ShopAll = () => {
  const [searchParams] = useSearchParams();
  const itemsPerPage = 16;
  const [allItems, setProducts] = useState([]);

  const searchQuery = searchParams.get("search") ||"";
   useEffect(()=>{
    fetchProducts({}).then(setProducts)
   },[]);

  const filteredItems = allItems.filter((item)=>
  item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
        <div>
            <ProductsLayout title="All Products" allItems={filteredItems} itemsPerPage={itemsPerPage} />
                  {/* No results */}
            {filteredItems.length === 0 && (
              <div className="flex flex-col justify-center items-center py-20 text-center">
                <p className="text-2xl md:text-3xl font-semibold text-gray-500">
                  No products found
                </p>
              </div>           
            )}
        </div>

)
};

export default ShopAll;