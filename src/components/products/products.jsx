import React from "react";
import ApiMappingCard from "../card/api_mapping_card";

const Products = ({products})=>{
    return(
      <div className="flex flex-wrap flex-row gap-4 justify-around md:justify-center px-0 py-4">
        <ApiMappingCard products={products} />
      </div>
    )
}
export default Products;