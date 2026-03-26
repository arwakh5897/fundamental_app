import React from "react";

const Sustainability = () => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sustainability</h1>
      <p className="text-gray-600 leading-7">
        We are committed to reducing our environmental impact by adopting
        sustainable practices across our operations.
      </p>

      <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
        <li>Eco-friendly packaging</li>
        <li>Responsible sourcing</li>
        <li>Reducing carbon footprint</li>
        <li>Supporting ethical production</li>
      </ul>
    </div>
  );
};

export default Sustainability;