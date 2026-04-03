import React from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../../../../utils/useToast";

const CartBuyButton = ({ qty , selectedSize, selectedColor, products })=>{
    const navigate = useNavigate();
    const { error } = useToast();

    const handleBuy =()=>{
        if (!selectedSize || !selectedColor) {
            error("Please select size and color first");
            return;
        }
      const orderProduct = { ...products , qty , size : selectedSize , color : selectedColor }
      navigate("/pages/checkout" , {state : {productData : orderProduct }})
    };
    return(
        <div>
            <button className="bg-buttons rounded hover-bg-buttons hover:cursor-pointer w-full lg:w-2/3 font-semibold py-2 px-4 transition"
            onClick={handleBuy}
            >
                Buy it Now
            </button>
        </div>
    )
}
export default CartBuyButton;