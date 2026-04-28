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
                reviews={item.reviews || ""}
                avarage_rating = {item.avarage_rating || "5"}
                total_reviews = {item.total_reviews || "1"}
                count={item.count}
                stock={item.stock}
                category={item.category}
                image={item.images[0] || ""}
                hoverImage={item.images?.[1] || item.images?.[0] || ""}
                subImages={item.images || ""}
              
                sizes={item.sizes}
                colors={item.colors}
                discount={Number(item.discount).toFixed(0)}
                
                // discount={Math.floor(Math.random() * 30) + 5} // 5% - 35%
              />
            ))}
        </>
    )
}
export default ApiMappingCard;