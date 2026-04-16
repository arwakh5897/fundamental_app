import React from "react";
import CloseButton from "../../buttons/close_button";

const SidebarHeader = ({ onClose , totalItems })=>{
    return(
        <div className="flex p-2 items-center font-semibold border-t border-b rounded overflow-hidden">
  
          <CloseButton
            onClick={onClose}
            className="text-foreground-secondray px-2 py-1 font-semibold"
          />

          <h2 className=" px-0 py-1 lg:text-lg border-l  flex-1 text-center">
            Your Shopping Cart
          </h2>

          <span className="relative flex items-center justify-center min-w-[32px] h-[32px] px-2 text-md font-semibold  rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {totalItems}

            {/* Glow pulse */}
            <span className="absolute inset-0 rounded-full  bg-white/20"></span>
          </span>

        </div>
    )
}
export default SidebarHeader;