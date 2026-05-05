import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { useAuth } from "../../context/authContext";
import useToast from "../../../utils/useToast";

const SignIn = () => {
  const {success , error} = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const fields = [
    { label: "Email", type: "email", placeholder: "Enter your email" },
    { label: "Password", type: "password", placeholder: "Enter your password" },
  ];

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await loginUser(form);

    if (res?.data?.token) {
      // save token
      localStorage.setItem("token", res.data.token);

      // save user in context
      login(res.data.user, res.data.token);

      navigate("/pages/user-profile");
    } else {
      error("Invalid credentials");
    }
  } catch (error) {
  console.error("Full error:", error);

  if (error.response) {
    error(error.response.data.message || "Backend error");
  } else {
    error("Network error");
  }
}
};

return (
  <div className="fixed inset-0 bg-menu-gradiant flex items-center justify-center px-4">

    {/* Blur overlay */}
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

    {/* Card */}
    <div className="relative w-full max-w-md bg-background rounded-3xl shadow-2xl border border-color overflow-hidden">

      {/* Top bar */}
      <div className="h-2 bg-buttons"></div>

      {/* Header */}
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-heading">Welcome Back</h1>
        <p className="text-fullGray text-sm mt-1">
          Sign in to continue your dashboard
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-6 pb-6 flex flex-col gap-4">

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-input border border-color px-4 py-3 rounded-xl
          focus:outline-none focus:ring-1 focus:ring-buttons transition"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full bg-input border border-color px-4 py-3 rounded-xl
          focus:outline-none focus:ring-1 focus:ring-buttons transition"
          required
        />

        {/* Forgot password */}
        <div className="text-right">
          <span 
          className="text-xs text-fullGray hover:text-buttons cursor-pointer"
          onClick={()=>navigate("/forgot-password")}>
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-buttons hover:opacity-90 transition text-xs text-buttons font-semibold py-3 rounded-xl"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-line"></div>
          <span className="px-3 text-fullGray text-xs">OR</span>
          <div className="flex-1 h-px bg-line"></div>
        </div>

        {/* Signup link */}
        <p className="text-center text-xs text-foreground">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-highlighted hover-text-highlighted cursor-pointer"
          >
            Sign Up
          </span>
        </p>

      </form>
    </div>
  </div>
);
};

export default SignIn;