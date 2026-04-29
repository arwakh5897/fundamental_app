import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileForm = ({ formData, handleChange, handleSubmit }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Edit Profile</h2>
        <p className="text-sm text-fullGray mt-1">
          Update your personal information
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAME + EMAIL */}
        <div className="grid md:grid-cols-2 gap-5">

          {[
            { name: "name", label: "Full Name", icon: "👤" },
            { name: "email", label: "Email Address", icon: "📧" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-xs text-fullGray flex items-center gap-1 mb-1">
                {field.icon} {field.label}
              </label>

              <input
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-3.5 bg-input rounded-2xl outline-none border border-transparent focus:border-gray-300 focus:bg-white transition"
              />
            </div>
          ))}

        </div>

        {/* PHONE */}
        <div>
          <label className="text-xs text-fullGray flex items-center gap-1 mb-1">
            📱 Phone Number
          </label>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3.5 bg-input rounded-2xl outline-none border border-transparent focus:border-gray-300 focus:bg-white transition"
          />
        </div>

        {/* ADDRESS */}
        <div>
          <label className="text-xs text-fullGray flex items-center gap-1 mb-1">
            📍 Address
          </label>

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3.5 bg-input rounded-2xl outline-none border border-transparent focus:border-gray-300 focus:bg-white transition"
          />
        </div>

        {/* CITY / PROVINCE / ZIP */}
        <div className="grid md:grid-cols-3 gap-5">

          {[
            { name: "city", label: "City", icon: "🏙️" },
            { name: "province", label: "Province", icon: "🗺️" },
            { name: "zip", label: "ZIP Code", icon: "📮" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-xs text-fullGray flex items-center gap-1 mb-1">
                {field.icon} {field.label}
              </label>

              <input
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-3.5 bg-input rounded-2xl outline-none border border-transparent focus:border-gray-300 focus:bg-white transition"
              />
            </div>
          ))}

        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-4">

          <button
            type="button"
            onClick={() => navigate("/pages/user-profile")}
            className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-2xl font-semibold transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-1/2 bg-buttons hover-bg-buttons text-white py-3 rounded-2xl font-semibold shadow-md"
          >
            Save Changes
          </button>

        </div>

      </form>
    </div>
  );
};

export default ProfileForm;