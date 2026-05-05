import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { resetPassword } from "../../api/auth";
import useToast from "../../../utils/useToast";

const ResetPassword = () => {
  const { success, error } = useToast();
  const { token } = useParams();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await resetPassword({
        token,
        password,
      });

      success("Password updated successfully");
    } catch (err) {
      error(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-buttons">
      <div className="bg-background p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border bg-input px-4 py-3 rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-buttons hover-bg-buttons text-xs text-foreground-secondary py-3 rounded-lg">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;