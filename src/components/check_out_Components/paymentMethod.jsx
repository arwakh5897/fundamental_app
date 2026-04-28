import React from "react";

const PaymentMethod = ({ formData , handleChange}) => {
  return (
    <div className="pt-4 border-t">
      <h3 className="text-lg font-medium mb-3">Payment Method</h3>

      <div className="space-y-2 text-sm">
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