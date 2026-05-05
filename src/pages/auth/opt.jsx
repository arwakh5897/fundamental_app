import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { verifyOtp } from "../../api/auth";
import useToast from "../../../utils/useToast";
import { useNavigate } from "react-router-dom";
const VerifyOtp = () => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const location = useLocation();
  const email = location.state?.email;

  const [form, setForm] = useState({
    otp: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      error("Passwords do not match");
      return;
    }

    try {
      await verifyOtp({
        email,
        otp: form.otp,
        password: form.password,
      });

      success("Password reset successfully");
      navigate("/login");
    } catch (err) {
      error(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-buttons px-4">
      <div className="bg-background p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Verify OTP</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={form.otp}
            onChange={handleChange}
            className="border border-color focus:outline-none focus:ring-1 focus:ring-buttons bg-input px-4 py-3 rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={form.password}
            onChange={handleChange}
            className="border border-color focus:outline-none focus:ring-1 focus:ring-buttons bg-input px-4 py-3 rounded-lg"
            required
            minLength={6}
          />

            <input
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full bg-input border border-color px-4 py-3 rounded-lg
            focus:outline-none focus:ring-1 focus:ring-buttons transition"
            required
            minLength={6}
            />

          <button className="bg-buttons text-foreground-secondary text-xs py-3 rounded-lg">
            Verify & Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;