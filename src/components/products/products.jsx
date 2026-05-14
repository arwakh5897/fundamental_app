import React, { useState } from "react";
import ApiMappingCard from "../card/api_mapping_card";
import ProductDetailsPopup from "../product_popUp/product_popUp";

const Products = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-wrap flex-row gap-4 justify-around md:justify-center px-2 lg:px-4 py-4">
        
        <ApiMappingCard
          products={products}
          onEyeClick={handleOpenPopup}
          setOpen={setOpen}
        />

      </div>

      {/* GLOBAL POPUP (ONLY ONCE) */}
      <ProductDetailsPopup
        product={selectedProduct}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Products;