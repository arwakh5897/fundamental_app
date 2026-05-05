import React from "react";
import PaymentMethod from "./paymentMethod";

const BillingForm = ({ formData, handleChange, handleSubmit }) => {
  const fields = [
    { name: "email", label: "Email Address", type: "email" },
    { name: "phone", label: "Phone Number", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "province", label: "Province", type: "text" },
    { name: "zip", label: "ZIP Code", type: "text" },
  ];

  return (
    <div className="lg:col-span-2 border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">
          Billing Details
        </h2>
        <p className="text-sm text-fullGray mt-1">
          Please enter your information to continue checkout
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* SECTION 1 */}
        <div className="space-y-4">

          {/* NAME */}
          <div>
            <label className="text-xs font-medium text-fullGray uppercase tracking-wide">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3.5 bg-input rounded-lg outline-none transition shadow-sm"
              required
            />
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-4">
            {fields.slice(0, 2).map((field) => (
              <div key={field.name}>
                <label className="text-xs font-medium text-fullGray uppercase tracking-wide">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full mt-2 p-3.5 bg-input rounded-lg outline-none transition shadow-sm"
                  required
                />
              </div>
            ))}
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-xs font-medium text-fullGray uppercase tracking-wide">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Complete Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-2 p-3.5 bg-input rounded-lg outline-none transition shadow-sm"
              required
            />
          </div>

          {/* GRID BOTTOM */}
          <div className="grid md:grid-cols-3 gap-4">
            {fields.slice(2).map((field) => (
              <div key={field.name}>
                <label className="text-xs font-medium text-fullGray uppercase tracking-wide">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full mt-2 p-3.5 bg-input rounded-lg outline-none bg-input transition shadow-sm"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2 - PAYMENT */}
        <div className="pt-2">
          <PaymentMethod
            formData={formData}
            handleChange={handleChange}
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-buttons hover-bg-buttons text-xs py-3.5 rounded-2xl font-semibold shadow-md transition"
        >
          Place Order
        </button>

      </form>
    </div>
  );
};

export default BillingForm;