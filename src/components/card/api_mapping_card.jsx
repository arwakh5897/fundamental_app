import react from "react";
import Card from "./card";

const ApiMappingCard =({products})=>{
    return(
    <>
        {products.map((item,index) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating || "5"}
                reviews={item.reviews}
                count={item.count}
                stock={item.stock}
                category={item.category}
                image={item.images[0]}
                hoverImage={item.images[1]}
                subImages={item.images}
              
                sizes={item.size}
                colors={item.color}
                discount={Number(item.discount).toFixed(0)}
                
                // discount={Math.floor(Math.random() * 30) + 5} // 5% - 35%
              />
            ))}
        </>
    )
}
export default ApiMappingCard;