import React, { useState } from "react";
import HamburgerButton from "./menu_items_components/hamburger_button";
import MobileSidebar from "./menu_items_components/mobile_sidebar";
import DesktopMenu from "./menu_items_components/desktop_menu";

const MenuItems = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="font-medium md:font-bold">
      {/* Mobile Hamburger */}
      <HamburgerButton onClick={() => setActive(true)} />

      {/* Mobile Sidebar */}
      <MobileSidebar active={active} onClose={() => setActive(false)} />

      {/* Desktop Menu */}
      <DesktopMenu />
    </div>
  );
};

export default MenuItems;