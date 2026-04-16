import React, { useState } from "react";
import CloseButton from "../../buttons/close_button";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import MobileMenuDropdown from "../../mobile_menu_dropdown/mobile_menu_dropdown";
import { menuData } from "../../menu_dropdown/menu_data";

const MobileSidebarContent = ({ onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuMap = {
    bundle: menuData.bundles,
    concern: menuData.concerns,
    type: menuData.types,
  };

  return (
    <div className="overflow-hidden relative">
      
      {/* MAIN MENU */}
      <div
        className={`transition-transform duration-300 p-4 ${
          activeMenu ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <CloseButton onClick={onClose} className="mb-6 text-3xl text-white" />

        <nav className="space-y-3">
          <Link to="/pages/shop_all" onClick={onClose}
            className="flex justify-between items-center border-b pb-2">
            <span>Shop All</span>
          </Link>

          {/* Bundle */}
          <div
            onClick={() => setActiveMenu("bundle")}
            className="flex justify-between items-center border-b pb-2 cursor-pointer"
          >
            <span>Shop Bundle</span>
            <ChevronRightIcon className="w-5 h-5" />
          </div>

          {/* Concern */}
          <div
            onClick={() => setActiveMenu("concern")}
            className="flex justify-between items-center border-b pb-2 cursor-pointer"
          >
            <span>By Concern</span>
            <ChevronRightIcon className="w-5 h-5" />
          </div>

          {/* Type */}
          <div
            onClick={() => setActiveMenu("type")}
            className="flex justify-between items-center border-b pb-2 cursor-pointer"
          >
            <span>By Type</span>
            <ChevronRightIcon className="w-5 h-5" />
          </div>
                    <Link to="/pages/accessories" onClick={onClose}
            className="flex justify-between items-center border-b pb-2">
            <span>Accessories</span>
          </Link>

          {/* <Link to="/pages/make_up" onClick={onClose}
            className="flex justify-between items-center border-b pb-2">
            <span>Makeup</span>
          </Link> */}
        </nav>
      </div>

      {/* DYNAMIC DROPDOWN */}
      <MobileMenuDropdown
        data={menuMap[activeMenu]}
        showMenu={!!activeMenu}
        setShowMenu={() => setActiveMenu(null)}
        onClose={onClose}
      />
    </div>
  );
};

export default MobileSidebarContent;