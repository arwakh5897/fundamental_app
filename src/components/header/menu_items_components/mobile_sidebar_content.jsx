import React from "react";
import CloseButton from "../../buttons/close_button";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const MobileSidebarContent = ({ onClose }) => {
  return (
    <div className="p-5 h-full bg-menu text-gray-800 flex flex-col">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold tracking-wide">Menu</h2>
        <CloseButton
          onClick={onClose}
          className="text-2xl text-gray-400 hover:text-black transition duration-200"
        />
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-4"></div>

      {/* Nav */}
      <nav className="space-y-2 flex-1">
        
        {/* Reusable Item */}
        {[
          { name: "Shop All", path: "/pages/shop_all" },
          { name: "By Concern", path: "/pages/by_concern" },
          { name: "By Type", path: "/pages/by_type" },
          { name: "Accessories", path: "/pages/accessories" },
          { name: "Makeup", path: "/pages/make_up" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.path}
            onClick={onClose}
            className="flex justify-between items-center px-4 py-3 rounded-xl 
                       hover:bg-white/70 backdrop-blur-sm
                       transition-all duration-200 group shadow-sm hover:shadow-md"
          >
            <span className="font-medium tracking-wide">
              {item.name}
            </span>

            <ChevronRightIcon
              className="w-5 h-5 text-gray-400 
                         group-hover:text-black 
                         group-hover:translate-x-1 
                         transition-all duration-200"
            />
          </Link>
        ))}

        {/* Special Highlight Item (Bundle) */}

      </nav>

    </div>
  );
};

export default MobileSidebarContent;