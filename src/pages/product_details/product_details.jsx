import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { useParams, useLocation } from "react-router-dom";

import ProductDetailImages from "../../components/products_details_components/product_detail_images";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import RelatedProducts from "../../components/products_details_components/related_products";
import ProductDetailHeadings from "../../components/products_details_components/product_detail_headings";
import ProductDetailCart from "../../components/products_details_components/product_detail_cart";
import AddToCartSidebar from "../../components/add_to_cart_sidebar/add_to_cart_sidebar";


const ProductDetails = () => {
  const { id } = useParams(); // ✅ yahan se id milegi
  const location = useLocation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (location.state?.productData) {
      setProducts(location.state.productData);
    }
  }, [location.state, id]); // 🔥 id bhi dependency me rakho

  const description = products?.description || "";
  const myDescription = description.split(" ");
  const shortDescription = myDescription.length > 100 ? myDescription.slice(0, 100).join(" ") + "..." : description;

  const { cart,  handleAddToCart, handleRemoveItem, updateCartItemSize , updateCartItemColor } = useCartContext();

  return (
    <div>
      <div className="flex flex-col p-4">
        <Breadcrumb title={products?.title} />

        <div className="flex flex-col lg:py-4 lg:flex-row gap-6">
          {/* Left Side - Images */}
          <div className="w-full flex-1 ">
            <ProductDetailImages thumbnail={products?.image} subImages={products?.subImages} />
          </div>

          {/* Right Side - Cart Details */}
          <div className="w-full flex-1 ">
            <ProductDetailCart 
              products={products}
              onUpdateSize={updateCartItemSize } 
              onUpdateColor={updateCartItemColor}
              shortDescription={shortDescription}
              onAdd={(qty , size , color) => handleAddToCart(products, qty , size , color)} 
            />
          </div>
        </div>
      </div>

      <div className="flex py-4">
        <ProductDetailHeadings products={products} />
      </div>

      <div className="py-4">
        <RelatedProducts />
      </div>

      {/* Sidebar */}
      <AddToCartSidebar
        onRemove={handleRemoveItem}        
        cart={cart}
      />
    </div>
  );
};

export default ProductDetails;