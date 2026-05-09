import React from "react";
import { useNavigate } from "react-router-dom";
import MobileLogin from "../auth/mobile_login";
import CloseButton from "../buttons/close_button";

const AccountSidebar = ({ active, onClose, isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-overlay transition-opacity duration-300 ${
          active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
  <nav
  data-lenis-prevent
  className={`fixed top-0 right-0 h-full w-4/5 md:w-96 bg-sidebar text-foreground-secondary z-50 flex flex-col transition-transform duration-1000 ${
    active ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Header */}
  <div className="relative px-5 py-4 border-b bg-buttons">
    <h2 className="text-lg font-semibold tracking-wide">
      My Account
    </h2>

    <p className="text-xs text-halfGray mt-0.5">
      Manage your profile & orders
    </p>

    <div className="absolute top-4 right-4">
      <CloseButton onClick={onClose} />
    </div>
  </div>

  {/* Scrollable Content */}
  <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">

    {/* Profile */}
    <div
      onClick={() => {
        navigate("/pages/user-profile");
        onClose();
      }}
      className="p-4 rounded-2xl bg-cart-total shadow-lg cursor-pointer hover:scale-[1.02] active:scale-95 transition-all"
    >
      <p className="text-xs uppercase tracking-wide text-halfWhite">
        Account
      </p>

      <div className="flex justify-between items-end mt-1">
        <h2 className="text-lg font-bold">
          Profile
        </h2>

        <span className="text-sm text-halfWhite">→</span>
      </div>
    </div>

    {/* Orders */}
    <div
      onClick={() => {
        navigate("/pages/order-tracking");
        onClose();
      }}
      className="p-4 rounded-2xl bg-cart-total shadow-lg cursor-pointer hover:scale-[1.02] active:scale-95 transition-all"
    >
      <p className="text-xs uppercase tracking-wide text-halfWhite">
        Orders
      </p>

      <div className="flex justify-between items-end mt-1">
        <h2 className="text-lg font-bold">
          My Orders
        </h2>

        <span className="text-sm text-halfWhite">→</span>
      </div>
    </div>

  </div>

  {/* Bottom Section (Sticky) */}
    <MobileLogin closeSidebar={onClose} />
</nav>
    </>
  );
};

export default AccountSidebar;