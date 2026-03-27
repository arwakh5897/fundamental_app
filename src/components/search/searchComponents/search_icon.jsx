import React, { useState } from "react";
import SerachTopUp from "./search_topup";

const SearchIcon =({darkLight})=>{
    const [open , setOpen] = useState(false);
    const handleClick = ()=> setOpen(trues => !trues);
    return(
        <div className="relative">
            <img 
            className="w-6 h-6"
             src={darkLight ? "/assets/icons/light-search.png" : "/assets/icons/search.png"} 
             alt="" 
             onClick={handleClick}
             />
                {open && <SerachTopUp handleClick={handleClick}/>}
        </div>
    )
}
export default SearchIcon;