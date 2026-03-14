import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";


const RightArrow =({slideRight})=>{
 const handleClick = () => {
     if(slideRight.current){
        slideRight.current.scrollBy({right: 300, behavior: "smooth"})
     }
};
    return(
   <div>
        <button onClick={handleClick} className="bg-menu-buttons p-2 rounded-full hover:opacity-80">
         <ChevronRightIcon className="w-5 h-5" />
        </button>
   </div>
    )
}
export default RightArrow;