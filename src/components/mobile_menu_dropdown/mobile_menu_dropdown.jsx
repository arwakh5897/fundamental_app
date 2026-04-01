import React from "react";
import CloseButton from "../../buttons/close_button";
import { Link } from "react-router-dom";

const MobileSidebarContent = ({ onClose }) => {
    return (
        <div className="p-4">
        <CloseButton onClick={onClose} className={"mb-6 text-3xl text-foreground-secondary font-semibold"}/>

          <nav className="space-y-4">
            <Link to="/pages/shop_all" className="block border-b-2 border-white pb-2" onClick={onClose}>Shop All</Link>
            <Link to="/pages/by_bundle" className="block border-b-2 border-white pb-2" onClick={onClose}>Shop Bundles</Link>
            <Link to="/pages/by_concern" className="block border-b-2 border-white pb-2" onClick={onClose}>By Concern</Link>
            <Link to="/pages/by_type" className="block border-b-2 border-white pb-2" onClick={onClose}>By Type</Link>
            <Link to="/pages/accessories" className="block border-b-2 border-white pb-2" onClick={onClose}>Accessories</Link>
            <Link to="/pages/make_up" className="block border-b-2 border-white pb-2" onClick={onClose}>MAKEUP</Link>
          </nav>
        </div>
    );
};

export default MobileSidebarContent;