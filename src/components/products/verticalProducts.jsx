import React, { useState } from "react";
import VerticalCard from "../card/verticalCard";

const VerticalProducts = ({products})=>{
    return(
      <div className="flex flex-wrap flex-row justify-center gap-2 md:gap-8 p-4 overflow-x-auto">
        {products.map((item, index) => (
              <VerticalCard
                key={index}
                title={item.name}
                price={item.price}
                discount={item.discount}
              />
            ))}
      </div>
    )
}
export default VerticalProducts;