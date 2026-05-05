import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const MobileLogin = ({ closeSidebar }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogin = () => {
    navigate("/login");
    if (closeSidebar) closeSidebar();
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    if (closeSidebar) closeSidebar();
    navigate("/");
  };

  return (
    <div className="w-full mt-4">
      {user ? (
        <button
          onClick={handleLogout}
          className="w-full bg-buttons hover-bg-buttons py-3 border-t rounded-t-lg font-semibold shadow-sm hover:cursor-pointer transition"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="w-full bg-buttons py-3 border-t rounded-t-lg font-semibold shadow-sm hover:cursor-pointer transition"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default MobileLogin;