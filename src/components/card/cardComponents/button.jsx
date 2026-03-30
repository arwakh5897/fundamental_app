import React from "react";
import { useNavigate } from "react-router-dom";

const CardButton = ({disabled, productData}) => {
    const navigate = useNavigate();
    return (
        <button
            disabled={disabled}
            onClick={()=>{ if(!disabled) navigate("/pages/product_details" , {state :{productData}})}}
            className={`flex bg-buttons hover-bg-buttons py-1 px-4 lg:px-2 rounded-sm text-xs hover:opacity-90 lg:font-semibold transition
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} gap-x-1`}>
            Add <span className="hidden lg:flex">to Cart</span>
        </button>
    )
}
export default CardButton;