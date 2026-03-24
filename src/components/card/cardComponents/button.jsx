import React from "react";
import { useNavigate } from "react-router-dom";

const CardButton = ({disabled}) => {
    const navigate = useNavigate();
    return (
        <button
            disabled={disabled}
            onClick={()=>{ if(!disabled) navigate("/pages/add_to_cart")}}
            className={`flex bg-menu-buttons py-1 px-4 md:px-2 rounded-sm text-xs hover:opacity-90 md:font-semibold transition
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} gap-x-1`}>
            Add <span className="hidden md:flex">to Cart</span>
        </button>
    )
}
export default CardButton;