import React from "react";
import { useNavigate } from "react-router-dom";

const MobileLogin = ({ closeSidebar }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to login
    navigate("/login");

    // Close the sidebar
    if (closeSidebar) closeSidebar();
  };

  return (
    <div className="w-full mt-4">
      <button
        onClick={handleClick}
        className="w-full bg-white text-foreground py-3 border-t rounded-t-lg font-semibold shadow-sm hover:cursor-pointer transition"
      >
        Sign In
      </button>
    </div>
  );
};

export default MobileLogin;