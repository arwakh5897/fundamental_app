import react from "react";
import Card from "./card";

const ApiMappingCard =({products , onEyeClick , setOpen})=>{
    return(
    <>
        {products.map((item,index) => (
              <Card
                className={"w-36 lg:w-78"}
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating || "4.5"}
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

                // PopUp Properties
                onEyeClick={onEyeClick}
                setOpen={setOpen}                
              />
            ))}
        </>
    )
}
export default ApiMappingCard;