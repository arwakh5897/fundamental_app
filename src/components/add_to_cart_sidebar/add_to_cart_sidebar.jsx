import React from "react";
import SidebarHeader from "./sidebar_componenets/sidebar_header";
import ShoppingCard from "../card/shopping_card";
import CartTotal from "./sidebar_componenets/cart_total";
import SidebarButtons from "./sidebar_componenets/sidebar_buttons";

const AddToCartSidebar = ({ active, onClose, totalItems, totalPrice, cart = [], onRemove = () => {} }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-overlay transition-opacity duration-300 ${
          active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <nav
       data-lenis-prevent
        className={`fixed top-0 right-0 h-full w-4/5 md:w-92 bg-sidebar text-foreground-secondary z-50 flex flex-col transition-transform duration-1000 transform ${
          active ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SidebarHeader onClose={onClose} totalItems={totalItems} />

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto scrollbar-hide space-y-0 mt-4 px-2 pb-2">
          {cart.length > 0 ? (
            cart.map((item) => (
              <ShoppingCard
                key={item.id}
                image={item.image}
                title={item.title}
                qty={item.qty}
                price={item.discountedPrice}
                onRemove={() => onRemove(item.id)}
              />
            ))
          ) : (
            <p className="text-center text-foreground text-sm mt-4">
              Your cart is empty
            </p>
          )}
        </div>
        <div className=" w-full">
            <CartTotal totalPrice={totalPrice} />
            <SidebarButtons onClick={onClose} />
        </div>
      </nav>
    </>
  );
};

export default AddToCartSidebar;