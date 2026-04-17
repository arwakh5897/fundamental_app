import React, { useState } from "react";
import CloseButton from "../../buttons/close_button";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import MobileMenuDropdown from "../../mobile_menu_dropdown/mobile_menu_dropdown";
import { menuData } from "../../menu_dropdown/menu_data";
import { motion } from "framer-motion";

const MobileSidebarContent = ({ onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuMap = {
    bundle: menuData.bundles,
    concern: menuData.concerns,
    type: menuData.types,
  };

  const item =
    "flex justify-between items-center px-4 py-3 rounded-xl transition-all duration-200 active:scale-95";

 return (
  <div
    data-lenis-prevent
    className="relative h-full overflow-hidden flex flex-col"
  >

    {/* MAIN CONTENT WRAPPER */}
    <motion.div
      className="flex flex-col flex-1 overflow-hidden"
      animate={{ x: activeMenu ? "-100%" : "0%" }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >

      {/* TOP HEADER (fixed) */}
      <div className="flex justify-between items-center p-5">
        <div>
          <h2 className="text-xl font-semibold tracking-wide">EzShop</h2>
          <p className="text-xs text-halfGray">Premium Collection</p>
        </div>
        <CloseButton onClick={onClose} className="text-2xl opacity-70" />
      </div>

      {/* QUICK ACTION (fixed) */}
      <div className="flex gap-2 mb-4 px-5">
        <div className="flex-1 bg-halfWhite rounded-xl px-3 py-2 text-xs text-center">
          New Drops
        </div>
        <div className="flex-1 bg-halfWhite rounded-xl px-3 py-2 text-xs text-center">
          Trending
        </div>
      </div>

      {/* SCROLL AREA ONLY */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-5">

        {/* SHOP */}
        <div className="mb-6">
          <p className="box-heading">
            SHOP
          </p>

          <div className="space-y-2 bg-halfWhite p-2 rounded-2xl">
            <Link to="/pages/shop_all" onClick={onClose} className={item + " hover-bg-box"}>
              <span>Shop All</span>
              <span className="text-xs text-white/30">→</span>
            </Link>

            <div onClick={() => setActiveMenu("bundle")} className={item + " cursor-pointer hover-bg-box"}>
              <span>Shop Bundle</span>
              <ChevronRightIcon className="w-5 h-5 opacity-60" />
            </div>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="mb-6">
          <p className="box-heading">
            EXPLORE
          </p>

          <div className="space-y-2 bg-halfWhite p-2 rounded-2xl">

            <div
              onClick={() => setActiveMenu("concern")}
              className={item + " cursor-pointer hover-bg-box"}
            >
              <span>By Concern</span>
              <ChevronRightIcon className="w-5 h-5 opacity-60" />
            </div>

            <div
              onClick={() => setActiveMenu("type")}
              className={item + " cursor-pointer hover-bg-box"}
            >
              <span>By Type</span>
              <ChevronRightIcon className="w-5 h-5 opacity-60" />
            </div>
          </div>
        </div>

        {/* BROWSE */}
        <div className="mb-6">
          <p className="box-heading">
            BROWSE
          </p>

          <div className="space-y-2 bg-halfWhite p-2 rounded-2xl">

            <div className={item + " cursor-pointer hover-bg-box"}>
              <span>Accessories</span>
              <span className="text-xs text-white/30">hot</span>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 p-3 rounded-2xl text-xs text-halfWhite">
          Fast delivery • Secure checkout • Premium quality
        </div>

      </div>
    </motion.div>

    {/* SUB MENU */}
    <motion.div
      animate={{ x: activeMenu ? "0%" : "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <MobileMenuDropdown
        data={menuMap[activeMenu]}
        showMenu={!!activeMenu}
        setShowMenu={() => setActiveMenu(null)}
        onClose={onClose}
      />
    </motion.div>

  </div>
);
};

export default MobileSidebarContent;