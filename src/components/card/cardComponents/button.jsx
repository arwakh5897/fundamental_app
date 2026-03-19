import React from "react";

const CardButton = () => {
    return (
        <button className=" flex bg-menu-buttons py-1 px-4 rounded-sm text-xs md:text-sm hover:opacity-90 md:font-semibold hover:cursor-pointer transition">
          Add&nbsp;<span className="hidden md:flex">to Cart</span>
        </button>
    )
}
export default CardButton;