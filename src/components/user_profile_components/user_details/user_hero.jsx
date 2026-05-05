import React from "react";
import { formatDate } from "../../../../utils/formatDate";

const UserHero = ({ user, onEdit }) => {
  if (!user) return null; // or loading UI

  return (
    <div className="relative rounded-3xl p-5 sm:p-6 bg-menu-gradiant text-white shadow-lg overflow-hidden">

      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>

      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 sm:gap-4">

          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center text-xl sm:text-2xl font-bold">
            {user?.name?.charAt(0)}
          </div>

          <div>
            <h2 className="text-lg sm:text-2xl font-bold">
              {user?.name}
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              {user?.email}
            </p>
            <p className="text-[10px] sm:text-xs text-white/60 mt-1">
              Joined on {formatDate(user?.created_at)}
            </p>
          </div>

        </div>

        {/* RIGHT SIDE BUTTON */}
        <button
          onClick={onEdit}
          className="w-full sm:w-auto bg-buttons hover-bg-buttons px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Edit Profile
        </button>

      </div>
    </div>
  );
};

export default UserHero;