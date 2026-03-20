import React, { useState } from "react";

const MenuItems = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="font-medium md:font-bold">

      {/* Mobile Button */}
      <div className="md:hidden">
        <button onClick={() => setActive(true)} className="flex flex-col gap-1">
          <span className="h-[2px] w-5 bg-black"></span>
          <span className="h-[2px] w-3 bg-black"></span>
          <span className="h-[2px] w-4 bg-black"></span>
        </button>
      </div>

      {/* Overlay */}
      {active && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setActive(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-menu-buttons text-white z-50 p-6 transition-transform duration-1000 ${
          active ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="text-3xl mb-6" onClick={() => setActive(false)}>
          ×
        </button>

        <nav className="space-y-4">
          <a href="/pages/shop_all" className="block border-b-2 border-white pb-2">Shop All</a>
          <a href="/pages/by_bundle" className="block border-b-2 border-white pb-2">Shop Bundles</a>
          <a href="/pages/by_concern" className="block border-b-2 border-white pb-2">By Concern</a>
          <a href="/pages/by_type" className="block border-b-2 border-white pb-2">By Type</a>
          <a href="/pages/accessories" className="block border-b-2 border-white pb-2">Accessories</a>
          <a href="/pages/make_up" className="block border-b-2 border-white pb-2">MAKEUP</a>
        </nav>
      </nav>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        <a href="/pages/shop_all">Shop All</a>
        <a href="/pages/by_bundle">Shop Bundles</a>
        <a href="/pages/by_concern">By Concern</a>
        <a href="/pages/by_type">By Type</a>
        <a href="/pages/accessories">Accessories</a>
        <a href="/pages/make_up">MAKEUP</a>
      </nav>

    </div>
  );
};

export default MenuItems;