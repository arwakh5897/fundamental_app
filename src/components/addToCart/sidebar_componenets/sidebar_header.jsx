import React from "react";
import CloseButton from "../../buttons/close_button";

const SidebarHeader = ({ onClose , totalItems })=>{
    return(
        <div className="flex p-1 items-center font-semibold border-t border-b overflow-hidden">
  
          <CloseButton
            onClick={onClose}
            className="text-white px-2 py-1 font-semibold"
          />

          <h2 className=" px-4 py-1 border-l border-r flex-1 text-center">
            Your Shopping Cart
          </h2>

          <span className="px-2 py-1 text-right min-w-[30px]">
            {totalItems}
          </span>

        </div>
    )
}
export default SidebarHeader;