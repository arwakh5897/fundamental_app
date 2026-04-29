import React from "react";

const OrderStatusDetails = () => {
  const order = {
    id: "#ORD123",
    status: "Shipped",
    estimatedDelivery: "25 April 2026",
    currentLocation: "Lahore Distribution Center",
    lastUpdate: "23 April 2026, 3:45 PM",
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Processing":
        return "bg-blue-100 text-blue-600";
      case "Shipped":
        return "bg-purple-100 text-purple-600";
      case "Delivered":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const steps = ["Pending", "Processing", "Shipped", "Delivered"];
  const currentStep = steps.indexOf(order.status);

  return (
    <div className="rounded-2xl shadow-md p-6 border border-gray-100">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">
          Order Status
        </h2>
        <span className="text-xs">{order.id}</span>
      </div>

      {/* Status Badge */}
      <div className="text-center mb-6">
        <div
          className={`inline-block px-5 py-2 rounded-full text-sm font-medium ${getStatusColor(
            order.status
          )}`}
        >
          {order.status}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center relative">
            
            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`absolute top-2 left-1/2 w-full h-1 ${
                  index < currentStep ? "bg-green-500" : "bg-gray-200"
                }`}
              ></div>
            )}

            {/* Circle */}
            <div
              className={`w-5 h-5 rounded-full z-10 ${
                index <= currentStep ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>

            {/* Label */}
            <p className="text-xs mt-2">{step}</p>
          </div>
        ))}
      </div>

      {/* 📦 Tracking Details */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
        <p className="text-sm text-blue-600 mb-1">Current Location</p>
        <p className="font-medium text-gray-800">
          {order.currentLocation}
        </p>

        <p className="text-xs text-gray-500 mt-2">
          Last updated: {order.lastUpdate}
        </p>
      </div>

      {/* Delivery Info */}
      <div className="bg-gray-50 rounded-xl p-4 text-center">
        <p className="text-sm text-gray-500">Estimated Delivery</p>
        <p className="font-medium text-gray-800">
          {order.estimatedDelivery}
        </p>
      </div>
    </div>
  );
};

export default OrderStatusDetails;