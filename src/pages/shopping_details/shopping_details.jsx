import React from "react";
import ShoppingDetailsCard from "../../components/card/shopping_details_card";
import { useCartContext } from "../../context/cartContext";

const ShoppingDetails =()=>{
  const { cart, handleRemoveItem} = useCartContext();
    return(
        <div>
            <h1 className="text-2xl font-semibold">Shopping Details</h1>
            {/* <div>
                <h2>Product Name</h2>
                <h2>Product Description</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Total</h2>
            </div> */}
            <div className="gap-3 flex flex-col p-2">
            {cart.map ((item , index) => (
              <ShoppingDetailsCard
                key={index}
                id={item.id}
                image={item.image}
                name={item.title}
                qty={item.qty}
                price={item.discountedPrice}
                size={item.size}
                color={item.color}
                onRemove={() => handleRemoveItem(item.id)}
              />
            ))}</div>
        </div>
    )
}
export default ShoppingDetails;