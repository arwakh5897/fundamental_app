import react,{useState} from "react";
import Banner from "../components/banners/banner";
import Pagination from "../components/pagination/pagination";
import VerticalProducts from "../components/products/verticalProducts";


const ProductsPage = () => {
   const [currentPage, setCurrentPage]= useState(1);

    const allProducts = Array.from({ length: 30 }, (item, index) => ({
      id: index + 1,
      name: `MakeUp Product ${index + 1}` 
      }));
    const productsPerPage = 12;
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    const visibleProducts = allProducts.slice(0, currentPage * productsPerPage);
    return (
        <div>
            <Banner/>
            <h1 className="bg-menu-buttons md:text-2xl font-bold text-center py-2 md:py-4">BUNDLE</h1>
            <VerticalProducts products={visibleProducts}/>
                <div className="py-8">
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
        </div>
    )
}
export default ProductsPage;