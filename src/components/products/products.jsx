import React, { useState } from "react";
import Card from "../card/card";

const Products = ({products})=>{
  // console.log("Products Component - Received Products:", products);
    return(
      <div className="flex flex-wrap flex-row justify-center gap-8 p-4 overflow-x-auto">
        {products.map((item,index) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating}
                stock={item.stock}
                category={item.category}
                image={item.image}
                sizes={["24", "32", "40"]}
                colors={["red", "blue", "green", "black", "white"]}
                discount={Number(item.discountPercentage).toFixed(0)}
                
                // discount={Math.floor(Math.random() * 30) + 5} // 5% - 35%
              />
            ))}
      </div>
    )
}
export default Products;