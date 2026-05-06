import React from "react";
import { Link } from "react-router-dom";

const MobileMenuDropdown = ({ onClose, showMenu, setShowMenu, data = [] }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full p-5 transition-transform duration-300 ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >

      {/* BACK HEADER */}
      <div
        onClick={setShowMenu}
        className="flex items-center gap-2 mb-6 cursor-pointer text-white/70 hover:text-white transition"
      >
        <span>←</span>
        <span className="text-sm">Back</span>
      </div>

      {/* SECTION TITLE (optional premium feel) */}
      <div className="mb-4">
        <p className="text-[11px] tracking-widest text-white/40">
          CATEGORIES
        </p>
      </div>

      {/* MENU LIST */}
      <nav className="space-y-2">
        {data.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            onClick={onClose}
            className="
              flex items-center justify-between
              px-4 py-3
              rounded-xl
              bg-halfWhite
              hover-bg-box              
              transition-all duration-200
              active:scale-[0.98]
              hover:scale-105
            "
          >
            <span>{item.name}</span>

            <span className="text-halfWhite text-xs">→</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenuDropdown;