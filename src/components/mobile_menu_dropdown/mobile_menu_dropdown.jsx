import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenuDropdown = ({ onClose, showMenu, setShowMenu, data = [] }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full p-4 transition-transform duration-300 ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* BACK */}
      <div
        onClick={setShowMenu}
        className="flex items-center gap-2 mb-8 cursor-pointer"
      >
        <span>← Back</span>
      </div>

      <nav className="space-y-3">
        {data.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            onClick={onClose}
            className="block border-b pb-2"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenuDropdown;