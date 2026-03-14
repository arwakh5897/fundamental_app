import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const LeftArrow =({scrollRef})=>{
      const leftRef = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
    return(
   <div className="hidden md:flex">
        <button onClick={leftRef} className="bg-menu-buttons p-2 rounded-full">
         <ChevronLeftIcon className="w-5 h-5" />
        </button>
   </div>
    )
}
export default LeftArrow;