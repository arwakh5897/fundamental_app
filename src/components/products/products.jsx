import React, { useState } from "react";
import Card from "../card/card";

const Products = ({products})=>{
    return(
      <div className="flex flex-wrap flex-row justify-center gap-8 p-4 overflow-x-auto">
        {products.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating.rate}
                reviews={item.rating.count}
                image={item.image}
                discount={Math.floor(Math.random() * 30) + 5} // 5% - 35%
              />
            ))}
      </div>
    )
}
export default Products;