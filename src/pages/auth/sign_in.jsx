import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    navigate("/");
    // Add login logic here
  };

  return (
  <div className="fixed inset-0 bg-black/40 z-60" >  
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 opacity-100 bg-white p-6 rounded-lg shadow-lg z-50">
     <h1 className="text-xl font-bold mb-6 text-center">Log In</h1>
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
              className="border-color rounded-sm px-3 py-2 outline-none"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 w-full bg-menu-buttons py-2 rounded-md font-semibold hover:cursor-pointer transition"
        >
          Sign In
        </button>
      </form>
              <p className="text-sm text-center mt-4">
                  Don't have an account?
          <span
            onClick={() => navigate("/signup")}
            className="ml-1 text-menu-buttons font-semibold cursor-pointer"
          >
            Sign Up
          </span>
        </p>
    </div>
</div>
  );
};

export default SignIn;