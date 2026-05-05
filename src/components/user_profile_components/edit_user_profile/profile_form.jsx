import React from "react";

const ProfileForm = ({ formData = {}, handleChange, handleSubmit, loading, navigate }) => {

  const fieldsTop = [
    { name: "name", label: "Full Name", icon: "👤" },
    { name: "email", label: "Email Address", icon: "📧" },
  ];

  const fieldsBottom = [
    { name: "city", label: "City", icon: "🏙️" },
    { name: "province", label: "Province", icon: "🗺️" },
    { name: "zip_code", label: "ZIP Code", icon: "📮" }, // ✅ FIX
  ];
  
  return (
    <div className="relative border border-gray-200 rounded-3xl p-4 lg:p-6 md:p-10 shadow-sm">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Edit Profile</h2>
        <p className="text-sm text-fullGray mt-1">
          Update your personal information
        </p>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="text-center py-10 text-fullGray">
          Loading profile...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME + EMAIL */}
          <div className="grid md:grid-cols-2 gap-5">
            {fieldsTop.map((field) => (
              <div key={field.name}>
                <label className="text-xs text-fullGray flex items-center gap-1 mb-1">
                  {field.icon} {field.label}
                </label>

                <input
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  readOnly={field.name === "email"}
                  className="w-full p-3.5 bg-input rounded-2xl outline-none border border-transparent  transition"
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
              value={formData.phone || ""}
              onChange={handleChange}
              className="w-full p-3.5 bg-input rounded-2xl outline-none border border-transparent  transition"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-xs text-fullGray flex items-center gap-1 mb-1">
              📍 Address
            </label>

            <input
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              className="w-full p-3.5 bg-input rounded-2xl outline-none border border-transparent  transition"
            />
          </div>

          {/* CITY / PROVINCE / ZIP */}
          <div className="grid md:grid-cols-3 gap-5">
            {fieldsBottom.map((field) => (
              <div key={field.name}>
                <label className="text-xs text-fullGray flex items-center gap-1 mb-1">
                  {field.icon} {field.label}
                </label>

                <input
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-input rounded-2xl outline-none border border-transparent  transition"
                />
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/pages/user-profile")}
              className="w-1/2 extra-button py-3 rounded-2xl font-semibold transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-1/2 bg-buttons hover-bg-buttons text-buttons py-3 rounded-2xl font-semibold shadow-md disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>

        </form>
      )}
    </div>
  );
};

export default ProfileForm;