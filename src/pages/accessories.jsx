import react,{use, useState} from "react";
import Banner from "../components/banners/banner";
import ProductsLayout from "../components/product_Layout/product_layout";


const Accessories = () => {
    const itemsPerPage = 16;
    const allItems = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `MakeUp Product ${index + 1}`,
    price: Math.floor(Math.random() * 2500) + 1,
    discount: Math.floor(Math.random() * 30) + 1,
    Date: new Date(
      Date.now() -
        Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    ),
  }));
    return (
        <div>
            <img className="w-full" src="/assets/images/banner3.png"/>
            <h1 className="bg-menu-buttons md:text-2xl font-bold text-center py-2 md:py-4">ACCESSORIES</h1>
            <ProductsLayout allItems={allItems} title="Accessories" itemsPerPage={itemsPerPage} />
        </div>
    )
}
export default Accessories;