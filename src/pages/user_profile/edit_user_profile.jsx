import React, { useEffect, useState } from "react";
import ProfilePreview from "../../components/user_profile_components/edit_user_profile/profile_preview";
import ProfileForm from "../../components/user_profile_components/edit_user_profile/profile_form";
import { updateProfile, getUser } from "../../api/auth";
import useToast from "../../../utils/useToast";
import { useNavigate } from "react-router-dom";

const EditUserProfile = () => {
  const { success, error } = useToast();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zip_code: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser(token);
        const userData = res.data.user;
        if (!userData) {
          throw new Error("User not found");
        }

        setFormData({
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
          address: userData.address || "",
          city: userData.city || "",
          province: userData.province || "",
          zip_code: userData.zip_code || "",
        });

      } catch (err) {
        console.error("Error fetching user data:", err);
        error("Failed to load profile");
      }
    };

    fetchUser();
  }, [token]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateProfile(formData, token);
      navigate("/pages/user-profile");            
      success("Profile updated successfully");
    } catch (err) {
      console.error(err);
      error("Update failed");
    } finally {
      setLoading(false);
    }
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
            loading={loading}
            navigate={navigate}
          />
        </div>

      </div>
    </div>
  );
};

export default EditUserProfile;