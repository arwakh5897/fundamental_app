import React from "react";

const RefundPolicy = () => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>

      <p className="text-gray-600 leading-7">
        We offer a refund or exchange within 7 days of purchase if the product
        is damaged or not as described.
      </p>

      <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
        <li>Item must be unused and in original packaging</li>
        <li>Proof of purchase required</li>
        <li>Refund processed within 5-7 working days</li>
      </ul>
    </div>
  );
};

export default RefundPolicy;