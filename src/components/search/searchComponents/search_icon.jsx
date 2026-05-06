import React, { useState } from "react";
import SerachTopUp from "./search_topup";
import { SearchIcon } from "lucide-react";

const SearchBar =({darkLight , className})=>{
    const [open , setOpen] = useState(false);
    const handleClick = ()=> setOpen(prev => !prev);
    return(
        <div className={`relative hidden lg:flex ${className}`}>
            <SearchIcon size={18} className="hover:cursor-pointer" onClick={handleClick}/>
             <div 
        className={`
          absolute right-0 mt-10
          transform transition-all duration-300 ease-in-out
          ${open 
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
        `}             >
                {open && <SerachTopUp handleClick={handleClick} className="right-0"/>}
             </div>
        </div>
    )
}
export default SearchBar;