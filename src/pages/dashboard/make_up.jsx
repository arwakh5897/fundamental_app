import react,{useEffect, useState} from "react";
import ProductsLayout from "../../components/product_Layout/product_layout";
import { fetchProducts } from "../../api/data";


const MakeUp = () => {
    const itemsPerPage = 8;
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);

    return (
        <div>
            <h1 className="bg-menu-buttons md:text-2xl font-bold text-center py-2 md:py-4">Make Up</h1>
            <ProductsLayout allItems={allItems} title="Make Up Products" itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default MakeUp;