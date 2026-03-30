import React from "react";
import SidebarHeader from "./sidebar_componenets/sidebar_header";
import ShoppingCard from "../card/shopping_card";

const AddToCartSidebar = ({ active, onClose, totalItems, cart = [], onRemove = () => {} }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 md:w-86 bg-menu-buttons text-white z-50 flex flex-col transition-transform duration-300 transform ${
          active ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SidebarHeader onClose={onClose} totalItems={totalItems} />

        {/* Cart Items */}
        <div className="flex flex-col overflow-y-auto scrollbar-hide h-1/2">
          {cart.length > 0 ? (
            cart.map((item) => (
              <ShoppingCard
                key={item.id}
                image={item.image}
                name={item.title}
                qty={item.qty}
                price={item.price}
                onRemove={() => onRemove(item.id)}
              />
            ))
          ) : (
            <p className="text-center text-sm text-gray-300 mt-4">
              Your cart is empty
            </p>
          )}
        </div>
      </nav>
    </>
  );
};

export default AddToCartSidebar;