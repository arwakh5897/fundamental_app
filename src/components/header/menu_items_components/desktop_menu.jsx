import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConcernDropDown from "../../menu_dropdown/concern_dropdown";
import BundleDropDown from "../../menu_dropdown/bundle_dropdown";
import TypeDropDown from "../../menu_dropdown/type_dropdown";

const DesktopMenu = () => {
  const [openBundle, setOpenBundle] = useState(false);
  const [openConcern, setOpenConcern] = useState(false);
  const [openType, setOpenType] = useState(false);

  return (
    <nav className="hidden lg:flex gap-6 items-center">
      <Link to="/pages/shop_all">Shop All</Link>
      
            {/* Dropdown */}
      <div
        className="relative py-4"
        onMouseEnter={() => setOpenBundle(true)}
        onMouseLeave={() => setTimeout(() => setOpenBundle(false), 200)}
      >
        <span className="cursor-pointer">Shop Bundles</span>

        {openBundle && (
            <BundleDropDown setOpen={setOpenBundle} />
        )}
      </div>

      {/* Dropdown */}
      <div
        className="relative py-4"
        onMouseEnter={() => setOpenConcern(true)}
        onMouseLeave={() => setTimeout(() => setOpenConcern(false), 200)}
      >
        <span className="cursor-pointer">By Concern</span>

        {openConcern && (
            <ConcernDropDown setOpen={setOpenConcern} />
        )}
      </div>

      {/* Dropdown */}
      <div
        className="relative py-4"
        onMouseEnter={() => setOpenType(true)}
        onMouseLeave={() => setTimeout(() => setOpenType(false), 200)}
      >
        <span className="cursor-pointer">By Type</span>

        {openType && (
            <TypeDropDown setOpen={setOpenType} />
        )}
      </div>
      
      <Link to="/pages/accessories">Accessories</Link>
      <Link to="/pages/make_up">MAKEUP</Link>
    </nav>
  );
};

export default DesktopMenu;