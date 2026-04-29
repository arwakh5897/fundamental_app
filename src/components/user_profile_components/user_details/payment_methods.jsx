import React from "react";

const PaymentMethods = ({ paymentMethods }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm">

      <h3 className="font-semibold mb-4">Payment Methods</h3>

      <div className="space-y-3">

        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-input rounded-xl hover:bg-gray-100 transition"
          >
            <div>
              <p className="font-semibold">{method.type}</p>
              <p className="text-fullGray text-xs">
                {method.number}
              </p>
            </div>

            {method.expiry && (
              <span className="text-xs text-fullGray">
                {method.expiry}
              </span>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default PaymentMethods;