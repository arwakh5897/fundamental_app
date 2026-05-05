import React, { useState } from "react";
import { forgotPassword } from "../../api/auth";
import useToast from "../../../utils/useToast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { success, error } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await forgotPassword({ email });

      success(res.message || "Reset link sent to your email");
      navigate("/verify-otp", { state: { email } });
    } catch (err) {
      error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-buttons px-4">      
    <div className="bg-background p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-color bg-input px-4 py-3 focus:ring-1 focus:ring-buttons focus:outline-none rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button 
          className="w-full bg-buttons hover-bg-buttons text-xs text-foreground-secondary py-3 rounded-lg"
          disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;