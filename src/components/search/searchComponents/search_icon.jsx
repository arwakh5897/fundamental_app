import React, { useState } from "react";
import SerachTopUp from "./search_topup";
import ClickOutside from "../../buttons/click_ouside_close";
const SearchIcon =({darkLight})=>{
    const [open , setOpen] = useState(false);
    const handleClick = ()=> setOpen(prev => !prev);
    return(
        <div className="relative">
            <img 
            className="w-6 h-6"
             src={darkLight ? "/assets/icons/light-search.png" : "/assets/icons/search.png"} 
             alt="" 
             onClick={handleClick}
             />
             <ClickOutside onClickOutside={()=>setOpen(false)}>
                {open && <SerachTopUp handleClick={handleClick}/>}
             </ClickOutside>
        </div>
    )
}
export default SearchIcon;