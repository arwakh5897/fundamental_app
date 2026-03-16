import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const LeftArrow =({scrollRef})=>{
      const leftRef = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollBy({ left: -900, behavior: "smooth",  });
    }
  };
    return(
   <div className="flex bg-transparent left-1 absolute z-50">
        <button onClick={leftRef} className="bg-menu-buttons md:p-2 p-1 rounded-full">
        <ChevronLeftIcon className="md:w-5 md:h-5 w-4 h-4" />
        </button>
   </div>
    )
}
export default LeftArrow;