import react,{useEffect, useState} from "react";
import { fetchProducts } from "../../api/data";
import ProductsLayout from "../../components/product_Layout/product_layout";


const Accessories = () => {
    const itemsPerPage = 16;
  const [allItems, setProducts] = useState([]);

   useEffect(()=>{
    fetchProducts().then(setProducts)
   },[]);
    return (
        <div>
            <h1 className="bg-menu-buttons md:text-2xl font-bold text-center py-2 md:py-4">ACCESSORIES</h1>
            <ProductsLayout allItems={allItems} title="Accessories" itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default Accessories;