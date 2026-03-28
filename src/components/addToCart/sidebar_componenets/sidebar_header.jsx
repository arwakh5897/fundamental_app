import React from "react";
import CloseButton from "../../buttons/close_button";

const SidebarHeader = ({ onClose })=>{
    return(
        <div className="flex p-1 items-center border-t border-b overflow-hidden">
  
  <CloseButton
    onClick={onClose}
    className="text-white px-2 py-1"
  />

  <h2 className="font-semibold px-4 py-1 border-l border-r flex-1 text-center">
    Your Shopping Cart
  </h2>

  <span className="px-2 py-1 text-right min-w-[30px]">
    8
  </span>

</div>
    )
}
export default SidebarHeader;