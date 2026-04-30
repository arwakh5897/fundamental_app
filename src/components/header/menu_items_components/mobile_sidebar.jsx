import React from "react";
import MobileLogin from "../../auth/mobile_login";
import MobileSidebarContent from "./mobile_sidebar_content";

const MobileSidebar = ({ active, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {active && (
        <div
          className="fixed  inset-0 bg-overlay z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-4/5 md:w-86 bg-menu-gradiant text-foreground-secondary z-50 p-0 flex flex-col justify-between transition-transform duration-1000 ${
          active ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileSidebarContent onClose={onClose}/>
        {/* <MobileLogin closeSidebar={onClose}/> */}
      </nav>
    </>
  );
};

export default MobileSidebar;