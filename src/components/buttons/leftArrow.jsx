import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const LeftArrow =({scrollRef})=>{
      const leftRef = () => {
    if (!scrollRef?.current) return; 
    const currentScrollValue = scrollRef.current;
    const maxScroll = currentScrollValue.offsetWidth * 0.85;
    currentScrollValue.scrollBy({ left: -maxScroll, behavior: "smooth",  });
 
  };
    return(
   <div className="flex bg-transparent left-1 absolute z-10">
        <button onClick={leftRef} className="bg-menu-buttons md:p-2 p-1 rounded-full hover:opacity-80">
        <ChevronLeftIcon className="md:w-5 md:h-5 w-4 h-4" />
        </button>
   </div>
    )
}
export default LeftArrow;