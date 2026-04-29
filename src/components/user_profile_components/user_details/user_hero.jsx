import React from "react";

const UserHero = ({ user, onEdit }) => {
  return (
    <div className="relative rounded-3xl p-6 bg-menu-gradiant text-white shadow-lg overflow-hidden">

      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>

      <div className="relative flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm text-white/80">{user.email}</p>
            <p className="text-xs text-white/60 mt-1">
              Joined {user.joinDate}
            </p>
          </div>

        </div>

        <button
          className="bg-buttons hover:cursor-pointer hover-bg-buttons px-4 py-2 rounded-lg text-sm"
          onClick={onEdit}
        >
          Edit Profile
        </button>

      </div>
    </div>
  );
};

export default UserHero;