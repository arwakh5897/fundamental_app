import React, { useState } from "react";
import ProfilePreview from "../../components/user_profile_components/edit_user_profile/profile_preview";
import ProfileForm from "../../components/user_profile_components/edit_user_profile/profile_form";

const EditUserProfile = () => {

  const [formData, setFormData] = useState({
    name: "User Name",
    email: "user@example.com",
    phone: "03001234567",
    address: "Pattoki, Punjab, Pakistan",
    city: "Pattoki",
    province: "Punjab",
    zip: "55200",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen py-12 bg-background">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-1">
          <ProfilePreview formData={formData} />
        </div>

        <div className="lg:col-span-2">
          <ProfileForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

      </div>

    </div>
  );
};

export default EditUserProfile;