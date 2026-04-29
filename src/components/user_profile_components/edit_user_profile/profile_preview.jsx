import React from "react";

const ProfilePreview = ({ formData }) => {
  return (
    <div className="bg-menu-gradiant rounded-3xl p-6 shadow-xl relative overflow-hidden">

      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>

      <div className="relative text-center space-y-4">

        <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold shadow-md">
          {formData.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-bold">{formData.name}</h2>
          <p className="text-sm">{formData.email}</p>
        </div>

        <div className="h-[1px] bg-white/20 my-3"></div>

        <div className="text-xs space-y-2">
          <p>📱 {formData.phone}</p>
          <p>📍 {formData.address}</p>
          <p>🏙️ {formData.city}, {formData.province}</p>
          <p>📮 {formData.zip}</p>
        </div>

      </div>
    </div>
  );
};

export default ProfilePreview;