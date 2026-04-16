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
    <div className="relative h-full bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-2xl text-white overflow-hidden">

      {/* MAIN */}
      <motion.div
        animate={{ x: activeMenu ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="p-5"
      >
        {/* TOP HEADER (Brand feel) */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold tracking-wide">EzShop</h2>
            <p className="text-xs text-white/50">Premium Collection</p>
          </div>
          <CloseButton onClick={onClose} className="text-2xl opacity-70" />
        </div>

        {/* QUICK ACTION BAR */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 bg-white/5 rounded-xl px-3 py-2 text-xs text-center">
            New Drops
          </div>
          <div className="flex-1 bg-white/5 rounded-xl px-3 py-2 text-xs text-center">
            Trending
          </div>
        </div>

        {/* SHOP */}
        <div className="mb-6">
          <p className="text-[11px] text-white/40 mb-2 px-2 tracking-widest">
            SHOP
          </p>

          <div className="space-y-2 bg-white/5 p-2 rounded-2xl">
            <Link to="/pages/shop_all" onClick={onClose} className={item + " hover:bg-white/10"}>
              <span>Shop All</span>
              <span className="text-xs text-white/30">→</span>
            </Link>

            <div onClick={() => setActiveMenu("bundle")} className={item + " cursor-pointer hover:bg-white/10"}>
              <span>Shop Bundle</span>
              <ChevronRightIcon className="w-5 h-5 opacity-60" />
            </div>
          </div>
        </div>

        {/* BROWSE */}
        <div className="mb-6">
          <p className="text-[11px] text-white/40 mb-2 px-2 tracking-widest">
            EXPLORE
          </p>

          <div className="space-y-2 bg-white/5 p-2 rounded-2xl">

            <div
              onClick={() => setActiveMenu("concern")}
              className={item + " cursor-pointer hover:bg-white/10"}
            >
              <span>By Concern</span>
              <span className="text-xs text-white/30">hot</span>
            </div>

            <div
              onClick={() => setActiveMenu("type")}
              className={item + " cursor-pointer hover:bg-white/10"}
            >
              <span>By Type</span>
              <ChevronRightIcon className="w-5 h-5 opacity-60" />
            </div>
          </div>
        </div>

        {/* FOOTER MINI */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 p-3 rounded-2xl text-xs text-white/60">
          Fast delivery • Secure checkout • Premium quality
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