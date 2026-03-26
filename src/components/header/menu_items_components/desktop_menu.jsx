import React from "react";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex gap-6">
      <Link to="/pages/shop_all">Shop All</Link>
      <Link to="/pages/by_bundle">Shop Bundles</Link>
      <Link to="/pages/by_concern">By Concern</Link>
      <Link to="/pages/by_type">By Type</Link>
      <Link to="/pages/accessories">Accessories</Link>
      <Link to="/pages/make_up">MAKEUP</Link>
    </nav>
  );
};

export default DesktopMenu;