import React, { useState } from "react";
import HamburgerButton from "./menu_items_components/hamburger_button";
import MobileSidebar from "./menu_items_components/mobile_sidebar";
import DesktopMenu from "./menu_items_components/desktop_menu";
import MobileSearchIcon from "../search/searchComponents/mobile_search_icon";

const MenuItems = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="font-semibold lg:font-bold">
      {/* Mobile Hamburger */}
      <div className="flex gap-8 items-center lg:hidden">
        <HamburgerButton onClick={() => setActive(true)} />
        <MobileSearchIcon />
      </div>
      {/* Mobile Sidebar */}
      <MobileSidebar active={active} onClose={() => setActive(false)} />

      {/* Desktop Menu */}
      <DesktopMenu />
    </div>
  );
};

export default MenuItems;