import React from "react";

const Divider =({className = ""})=>{
    return(
      <div className={`${className}`}>      
        <span className="block h-[1px] w-full bg-line"></span>
     </div>
    )
}
export default Divider;