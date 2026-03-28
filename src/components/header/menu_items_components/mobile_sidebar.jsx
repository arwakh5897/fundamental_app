import React from "react";
import { Link } from "react-router-dom";
import MobileLogin from "../../auth/mobile_login";
import ClickOutside from "../../buttons/click_ouside_close";
import CloseButton from "../../buttons/close_button";

const MobileSidebar = ({ active, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {active && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-72 bg-menu-buttons text-white z-50 p-0 flex flex-col justify-between transition-transform duration-1000 ${
          active ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button + Menu Links */}
        <div className="p-4">
        <CloseButton onClick={onClose} className={"mb-6 text-3xl text-white font-semibold"}/>

          <nav className="space-y-4">
            <Link to="/pages/shop_all" className="block border-b-2 border-white pb-2" onClick={onClose}>Shop All</Link>
            <Link to="/pages/by_bundle" className="block border-b-2 border-white pb-2" onClick={onClose}>Shop Bundles</Link>
            <Link to="/pages/by_concern" className="block border-b-2 border-white pb-2" onClick={onClose}>By Concern</Link>
            <Link to="/pages/by_type" className="block border-b-2 border-white pb-2" onClick={onClose}>By Type</Link>
            <Link to="/pages/accessories" className="block border-b-2 border-white pb-2" onClick={onClose}>Accessories</Link>
            <Link to="/pages/make_up" className="block border-b-2 border-white pb-2" onClick={onClose}>MAKEUP</Link>
          </nav>
        </div>

        {/* Bottom Sign In */}
        <MobileLogin closeSidebar={onClose}/>
      </nav>
    </>
  );
};

export default MobileSidebar;