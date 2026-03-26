import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const fields = [
    { label: "Name", type: "text", placeholder: "Enter your name" },
    { label: "Email", type: "email", placeholder: "Enter your email" },
    { label: "Password", type: "password", placeholder: "Create a password" },
    { label: "Confirm Password", type: "password", placeholder: "Confirm password" },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    "confirm password": "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form["confirm password"]) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", form);

    // API call here

    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-40">
      {/* Modal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white p-6 rounded-lg shadow-lg z-50">
        
        <h1 className="text-xl font-bold mb-6 text-center">Sign Up</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-1">
              <label className="font-semibold">{field.label}</label>
              <input
                type={field.type}
                name={field.label.toLowerCase()}
                placeholder={field.placeholder}
                value={form[field.label.toLowerCase()]}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-menu-buttons"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 w-full bg-menu-buttons text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-sm text-center mt-4">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="ml-1 text-menu-buttons font-semibold cursor-pointer"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;