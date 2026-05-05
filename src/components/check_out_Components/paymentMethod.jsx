import React from "react";

const PaymentMethod = ({ formData , handleChange}) => {
  return (
    <div className="pt-4 border-t">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">
          Payment Method
        </h3>
        <p className="text-xs text-fullGray">
          Choose how you want to pay
        </p>
      </div>
      <div className="space-y-2 text-xs">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment_method"
            value="COD"
            checked={formData.payment_method === "COD"}
            onChange={handleChange}
          />
          Cash on Delievry 
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment_method"
            value="CARD"
            checked={formData.payment_method === "CARD"}
            onChange={handleChange}
          />
          Credit / Debit Card
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;