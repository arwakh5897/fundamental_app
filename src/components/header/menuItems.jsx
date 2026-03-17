import React, { useState } from "react";

const MenuItems = () => {

  const [active, setActive] = useState(false);

  const itemNames = [
    "Shop All",
    "Shop Bundles",
    "By Concern",
    "By Type",
    "Accessories",
    "MAKEUP",
  ];

  return (
    <div className="font-medium">

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setActive(true)} className="text-2xl flex flex-col gap-1">
          {/* 1st line */}
          <span className="block h-[2px] w-5 bg-black"></span>

          {/* 2nd line (smallest) */}
          <span className="block h-[2px] w-3 bg-black"></span>

          {/* 3rd line (medium) */}
          <span className="block h-[2px] w-4 bg-black"></span>
        </button>
      </div>

      {/* Overlay */}
      {active && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setActive(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-menu-buttons text-white z-50 p-6 transform transition-transform duration-1000 ${
          active ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Close Button */}
        <button
          className="text-3xl mb-6"
          onClick={() => setActive(false)}
        >
          ×
        </button>

        <div className="space-y-4">
          {itemNames.map((item, index) => (
            <h1
              key={index}
              className="cursor-pointer hover:text-gray-300"
            >
              {item}
              <p className="h-0.5 bg-white"></p>
            </h1>
          ))}
        </div>

      </nav>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        {itemNames.map((item, index) => (
          <h1
            key={index}
            className="cursor-pointer hover:text-gray-600"
          >
            {item}
          </h1>
        ))}
      </nav>

    </div>
  );
};

export default MenuItems;