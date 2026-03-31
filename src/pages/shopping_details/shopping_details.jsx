import React from "react";
import ShoppingDetailsCard from "../../components/card/shopping_details_card";
import { useCartContext } from "../../context/cartContext";
import ShoppingDetailsCardButtons from "../../components/card/shopping_details_card_components/shopping_Detail_Card_buttons";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import ShoppingDetailsCartTotal from "../../components/card/shopping_details_card_components/shopping_Details_cart_total";

const ShoppingDetails =()=>{
  const { cart, handleRemoveItem} = useCartContext();
    return(
        <div className="flex flex-col p-4 gap-6">
          <Breadcrumb title="Shopping Details" />
            {/* <h1 className="text-2xl font-semibold">Shopping Details</h1> */}
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
            ))}
            </div>
            <ShoppingDetailsCartTotal totalPrice={cart.reduce((total, item) => total + item.discountedPrice * item.qty, 0)} />
            <div>
                <ShoppingDetailsCardButtons />
            </div>
        </div>
    )
}
export default ShoppingDetails;