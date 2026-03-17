import React ,{useState} from "react";
import Card from "../card/card";
import Products from "../products/products";

const Ance = () => {
     const [currentPage, setCurrentPage]= useState(1);
  
      const allProducts = Array.from({ length: 20 }, (item, index) => ({
        id: index + 1,
        name: `MakeUp Product ${index + 1}` 
        }));
      const productsPerPage = 6;
      const totalPages = Math.ceil(allProducts.length / productsPerPage);
  
      const visibleProducts = allProducts.slice(0, currentPage * productsPerPage);
  
      return (
        <div>
      <div className="bg-menu-buttons md:text-4xl text-center py-2 md:py-4">
            ANCE
            <span className="font-bold mx-2">ESSENTIALS</span>
        </div>
               <img className="w-full"src="assets/images/banner2.png"/>
        <Products products={visibleProducts}/>
    </div>
    )
}
export default Ance;