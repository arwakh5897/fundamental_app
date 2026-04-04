import React from "react";
import ApiMappingCard from "../card/api_mapping_card";

const Products = ({products})=>{
    return(
      <div className="flex flex-wrap flex-row gap-4 sm:justify-around md:justify-center p-4">
        <ApiMappingCard products={products} />
      </div>
    )
}
export default Products;