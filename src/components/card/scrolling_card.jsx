import React, { useRef } from "react";
import Card from "./card";
import LeftArrow from "../buttons/leftArrow";
import RightArrow from "../buttons/rightArrow";

const ScrollingCard =({allItems})=>{
  const scrollReference = useRef(null);
    return(
        <div className="relative flex items-center p-4">
        <LeftArrow scrollRef={scrollReference} />
          <div ref={scrollReference} 
          className="flex flex-row scrollbar-hide overflow-x-auto scroll-smooth md:gap-8 gap-4 py-4">
            {allItems.map((item, index) => (
              <div key={index} className="flex-shrink-0">
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
              </div>
            ))}
          </div>
       <RightArrow scrollRef={scrollReference} />
       </div>            
    )
}
export default ScrollingCard;