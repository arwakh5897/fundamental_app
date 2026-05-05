import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../api/auth";
import useToast from "../../../utils/useToast";

const SignUp = () => {
  const {success , error} = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const res = await signupUser(payload);

      success("Account created successfully");

      navigate("/login");

    } catch (err) {
  console.log("Full error:", err);

      if (err.response) {
        console.log("Backend error:", err.response.data);
        error(err.response.data.message || "Validation error");
      } else {
        toast.error("Network error");
      }
    }
     finally {
      setLoading(false);
    }
  };

return (
  <div className="fixed inset-0 bg-buttons flex items-center justify-center px-4">

    {/* Overlay blur */}
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

    {/* Card */}
    <div className="relative w-full max-w-md bg-background rounded-3xl shadow-2xl border border-color overflow-hidden">

      {/* Top Accent Bar */}
      <div className="h-2 bg-buttons"></div>

      {/* Header */}
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-heading">Create Account</h1>
        <p className="text-fullGray text-sm mt-1">
          Join your dashboard system
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-6 pb-6 flex flex-col gap-4">

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full bg-input border border-color px-4 py-3 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-buttons transition"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full bg-input border border-color px-4 py-3 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-buttons transition"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password (min 6)"
          onChange={handleChange}
          className="w-full bg-input border border-color px-4 py-3 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-buttons transition"
          required
          minLength={6}
        />

        <input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="w-full bg-input border border-color px-4 py-3 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-buttons transition"
          required
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-buttons hover:opacity-90 transition text-buttons font-semibold py-3 rounded-xl shadow-lg"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-line"></div>
          <span className="px-3 text-fullGray text-xs">OR</span>
          <div className="flex-1 h-px bg-line"></div>
        </div>

        {/* Login */}
        <p className="text-center text-sm text-foreground">
          Already have an account?{" "}
          <a href="/login" className="text-highlighted hover-text-highlighted">
            Sign In
          </a>
        </p>

      </form>
    </div>
  </div>
);
};

export default SignUp;