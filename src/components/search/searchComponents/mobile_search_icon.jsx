import React, { useState } from "react";
import SerachTopUp from "./search_topup";

const MobileSearchIcon =()=>{
    const [open , setOpen] = useState(false);
    const handleClick = ()=> setOpen(prev => !prev);
    return(
        <div className="relative" >
            <img 
            className="w-4 h-4 md:w-6 md:h-6 hover:cursor-pointer"
             src="/assets/icons/search.png"
             alt="" 
             onClick={handleClick}
             />
             <div 
        className={`
          absolute left-0 mt-5
          transform transition-all duration-300 ease-in-out
          ${open 
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
        `}             >
                {open && <SerachTopUp handleClick={handleClick} className="left-0"/>}
             </div>
        </div>
    )
}
export default MobileSearchIcon;