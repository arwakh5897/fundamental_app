import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="p-4">
        <Breadcrumb title="Checkout" />
    <div className="flex justify-center bg-gray-100 items-start p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden md:flex">

        {/* Billing Details */}
        <div className="w-full md:w-2/3 p-6">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                name="province"
                placeholder="Province"
                value={formData.province}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none "
              required
            />
            <button
              type="submit"
              className="w-full bg-buttons hover-bg-buttons hover:cursor-pointer text-white p-3 rounded font-semibold  transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Cart Summary */}
        <div className="w-full md:w-1/3 bg-gray-50 p-6 border-l border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Cart Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Product 1</span>
              <span>RS 5,000</span>
            </div>
            <div className="flex justify-between">
              <span>Product 2</span>
              <span>RS 3,200</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>RS 8,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CheckOut;