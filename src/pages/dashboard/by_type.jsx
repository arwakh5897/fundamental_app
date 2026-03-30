import react,{useEffect, useState} from "react";
import ProductsLayout from "../../components/product_Layout/product_layout";
import { fetchProducts } from "../../api/data";

const ByType = () => {
    const itemsPerPage = 8;
    const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);

    return (
        <div>
            <h1 className="bg-menu-buttons lg:text-2xl font-bold text-center py-2 lg:py-4">TYPE</h1>
            <ProductsLayout allItems={allItems} title="By Type" itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default ByType;