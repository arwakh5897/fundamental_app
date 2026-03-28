import React from "react";
import SidebarHeader from "./sidebar_componenets/sidebar_header";
import Divider from "../divider/divider";
import ShoppingCard from "../card/shopping_card";

const AddToCartSidebar = ({ active, onClose , cart=[] }) => {
    return (
    <>
        {active && (
        <div 
            className="flex bg-overlay fixed top-0 left-0 w-full h-full justify-end z-50"
            // onClick={onClose}
        > 
        <nav
            className={`fixed top-0 right-0 h-full w-72 md:w-86 bg-menu-buttons text-white z-50 p-0 flex flex-col transition-transform duration-1000 ${
            active ? "translate-x-0" : "translate-x-full"
            }`}
        >
         <SidebarHeader onClose={onClose}/>
         <Divider />
         {cart.map((item)=>
         <ShoppingCard 
             image={item.image}
             name={item.title}
             qty={item.qty}
             price={item.price}
             onRemove={() => onRemove(item.id)}
         />
         )}
         <Divider />
        </nav>
        </div>
    )}
    </>
    );
};

export default AddToCartSidebar;

