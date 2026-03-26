import React from "react";

const FAQ = () => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">FAQ's</h1>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">How can I place an order?</h3>
          <p className="text-gray-600">
            Simply browse products, add to cart, and checkout.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">What payment methods are available?</h3>
          <p className="text-gray-600">
            We accept Cash on Delivery and online payments.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">How long does delivery take?</h3>
          <p className="text-gray-600">
            Delivery usually takes 3-5 working days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;