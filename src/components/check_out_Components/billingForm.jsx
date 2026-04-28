import React from "react";
import PaymentMethod from "./paymentMethod";

const BillingForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Billing Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 outline-none border rounded "
          required
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 outline-none border rounded"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 outline-none border rounded"
            required
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 outline-none border rounded"
          required
        />

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 outline-none border rounded"
            required
          />
          <input
            type="text"
            name="province"
            placeholder="Province"
            value={formData.province}
            onChange={handleChange}
            className="w-full p-2 outline-none border rounded"
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP"
            value={formData.zip}
            onChange={handleChange}
            className="w-full p-2 outline-none border rounded"
            required
          />
        </div>

        {/* Payment */}
        <PaymentMethod formData={formData} handleChange={handleChange}/>

        <button
          type="submit"
          className="w-full bg-buttons hover-bg-buttons hover:cursor-pointer text-white py-3 rounded-xl font-semibold"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BillingForm;