import React from "react";
import ApiMappingCard from "../card/api_mapping_card";

const Products = ({products})=>{
    return(
      <div className="flex flex-wrap flex-row justify-center gap-8 p-4 overflow-x-auto">
        <ApiMappingCard products={products} />
      </div>
    )
}
export default Products;