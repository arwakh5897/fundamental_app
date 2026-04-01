import React from "react";
import CloseButton from "../../buttons/close_button";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const MobileSidebarContent = ({ onClose }) => {
  return (
    <div className="p-4">
      {/* Close Button */}
      <CloseButton
        onClick={onClose}
        className="mb-6 text-3xl text-foreground-secondary font-semibold"
      />

      {/* Nav */}
      <nav className="space-y-3">
        
        {/* Reusable Style */}
        <Link
          to="/pages/shop_all"
          onClick={onClose}
          className="flex justify-between items-center border-b border-gray-300 pb-2"
        >
          <span>Shop All</span>
        </Link>

        {/* Bundle (Fixed alignment) */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 cursor-pointer">
          <span>Shop Bundle</span>
          <ChevronRightIcon className="w-5 h-5" />
        </div>

        <Link
          to="/pages/by_concern"
          onClick={onClose}
          className="flex justify-between items-center border-b border-gray-300 pb-2"
        >
          <span>By Concern</span>
          <ChevronRightIcon className="w-5 h-5" />
        </Link>

        <Link
          to="/pages/by_type"
          onClick={onClose}
          className="flex justify-between items-center border-b border-gray-300 pb-2"
        >
          <span>By Type</span>
          <ChevronRightIcon className="w-5 h-5" />
        </Link>

        <Link
          to="/pages/accessories"
          onClick={onClose}
          className="flex justify-between items-center border-b border-gray-300 pb-2"
        >
          <span>Accessories</span>
        </Link>

        <Link
          to="/pages/make_up"
          onClick={onClose}
          className="flex justify-between items-center border-b border-gray-300 pb-2"
        >
          <span>Makeup</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileSidebarContent;