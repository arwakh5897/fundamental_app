import React, { useState } from "react";
import SerachTopUp from "./search_topup";

const SearchIcon =({darkLight , className})=>{
    const [open , setOpen] = useState(false);
    const handleClick = ()=> setOpen(prev => !prev);
    return(
        <div className={`relative ${className}`}>
            <img 
            className="w-6 h-6 hover:cursor-pointer"
             src={darkLight ? "/assets/icons/light-search.png" : "/assets/icons/search.png"} 
             alt="" 
             onClick={handleClick}
             />
             <div 
        className={`
          absolute right-0 mt-5
          transform transition-all duration-300 ease-in-out
          ${open 
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
        `}             >
                {open && <SerachTopUp handleClick={handleClick}/>}
             </div>
        </div>
    )
}
export default SearchIcon;