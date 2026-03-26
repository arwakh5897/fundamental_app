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
        className="w-full bg-white text-foreground py-2 border-t font-semibold rounded-md shadow-sm hover:bg-gray-100 transition"
      >
        Sign In
      </button>
    </div>
  );
};

export default MobileLogin;