import React from "react";

const CardButton = ({disabled}) => {
    return (
        <button
            disabled={disabled}
            className={`flex bg-menu-buttons py-1 px-4 rounded-sm text-xs md:text-sm hover:opacity-90 md:font-semibold transition
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
            Add <span className="hidden md:flex">to Cart</span>
        </button>
    )
}
export default CardButton;