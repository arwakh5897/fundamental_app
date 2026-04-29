import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUserProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Muhammad Zain",
    email: "zain@example.com",
    phone: "03001234567",
    address: "Pattoki, Punjab, Pakistan",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
  };

  const fields = [
    { name: "name", label: "Full Name" },
    { name: "email", label: "Email Address" },
    { name: "phone", label: "Phone Number" },
    { name: "address", label: "Address" },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 p-6">

      {/* HEADER */}
      <div className="bg-menu-gradiant text-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>

        <div className="relative">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <p className="text-white/70 text-sm mt-1">
            Update your personal information
          </p>
        </div>
      </div>

      {/* FORM CARD */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-5"
      >

        {fields.map((field) => (
          <div key={field.name}>
            <label className="text-xs text-gray-500 uppercase tracking-wide">
              {field.label}
            </label>

            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full mt-2 p-3.5 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:bg-white focus:border-blue-500 transition"
            />
          </div>
        ))}

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 pt-4">

          <button
            type="button"
            onClick={()=> navigate("/pages/user-profile")}
            className="w-1/2 bg-input py-3 rounded-2xl font-semibold transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-1/2 bg-buttons hover-bg-buttons text-foreground-secondary py-3 rounded-2xl font-semibold transition"
          >
            Save Changes
          </button>

        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;