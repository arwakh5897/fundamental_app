import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const LeftArrow =({onClick})=>{
    return(
   <div>
        <button onClick={onClick} className="bg-menu-buttons p-2 rounded-full">
         <ChevronLeftIcon className="w-5 h-5" />
        </button>
   </div>
    )
}
export default LeftArrow;