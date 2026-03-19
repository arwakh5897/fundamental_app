import react,{use, useState} from "react";
import ProductsLayout from "../components/product_Layout/product_layout";


const ByBundle = () => {
    const itemsPerPage = 8;
  const allItems = Array.from({ length: 36 }, (_, index) => ({
    id: index + 1,
    name: `MakeUp Product ${index + 1}`,
    price: Math.floor(Math.random() * 1500) + 1,
    discount: Math.floor(Math.random() * 35) + 1,
    Date: new Date(
      Date.now() -
        Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    ),
  }));

    return (
        <div>
            <img className="w-full" src="/assets/images/banner2.png"/>
            <h1 className="bg-menu-buttons md:text-2xl font-bold text-center py-2 md:py-4">BUNDLE</h1>
            <ProductsLayout allItems={allItems} title="By Bundle" itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default ByBundle;