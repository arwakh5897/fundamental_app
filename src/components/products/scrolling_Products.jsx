import React, { useRef } from "react";
import LeftArrow from "../buttons/leftArrow";
import RightArrow from "../buttons/rightArrow";
import ApiMappingCard from "../card/api_mapping_card";

const ScrollingProducts =({allItems})=>{
  const scrollReference = useRef(null);
    return(
        <div className="relative flex items-center p-4">
        <LeftArrow scrollRef={scrollReference} />
          <div ref={scrollReference} 
          className="flex flex-row scrollbar-hide overflow-x-auto scroll-smooth lg:gap-8 gap-4 py-4">
               <ApiMappingCard products={allItems}/>
          </div>
       <RightArrow scrollRef={scrollReference} />
       </div>            
    )
}
export default ScrollingProducts;