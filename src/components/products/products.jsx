import React, { useState } from "react";
import Card from "../card/card";

const Products = ({products})=>{
    return(
      <div className="flex flex-wrap flex-row justify-center gap-8 p-4 overflow-x-auto">
        {products.map((item, index) => (
              <Card
                key={index}
                title={item.name}
                price={item.price}
                discount={item.discount}
              />
            ))}
      </div>
    )
}
export default Products;