import React from "react";
import CloseButton from "../../buttons/close_button";

const SidebarHeader = ({ onClose , totalItems })=>{
    return(
        <div className="flex p-2 items-center font-semibold border-t border-b rounded overflow-hidden">
  
          <CloseButton
            onClick={onClose}
            className="text-foreground px-2 py-1 font-semibold"
          />

          <h2 className=" px-0 py-1 lg:text-lg border-l border-r flex-1 text-center">
            Your Shopping Cart
          </h2>

          <span className="px-2 py-1 text-right min-w-[30px]">
            {totalItems}
          </span>

        </div>
    )
}
export default SidebarHeader;