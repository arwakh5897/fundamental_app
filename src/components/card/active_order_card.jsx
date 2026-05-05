const ActiveOrderCard = ({ order }) => {
  const steps = ["pending", "approved", "shipped", "delivered"];

  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-50 text-yellow-700";
      case "approved":
        return "bg-blue-50 text-blue-700";
      case "shipped":
        return "bg-purple-50 text-purple-700";
      case "delivered":
        return "bg-green-50 text-green-700";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const currentStep = steps.indexOf(order.status);

  return (
    <div className="rounded-3xl border border-color shadow-sm hover:shadow-md transition-all overflow-hidden">

      {/* Top Bar (LIKE Delivered Card) */}
      <div className="bg-menu-gradiant text-white px-5 py-3 flex justify-between items-center">

        <div>
          <p className="text-sm font-medium">Order #{order.id}</p>
          <p className="text-[11px] text-gray-300">
            Track your order progress
          </p>
        </div>

        <span className={`text-[11px] px-3 py-1 rounded-full ${getStatusStyle(order.status)}`}>
          {order.status.toUpperCase()}
        </span>

      </div>

      {/* Content */}
      <div className="p-5 space-y-6">

        {/* Progress (Cleaner like modern apps) */}
        <div className="relative flex justify-between">

          {steps.map((step, i) => {
            const active = i <= currentStep;

            return (
              <div key={i} className="flex flex-col items-center flex-1 relative">

                {/* Line */}
                {i !== steps.length - 1 && (
                  <div
                    className={`absolute top-2 left-1/2 w-full h-[3px] ${
                      i < currentStep ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}

                {/* Dot */}
                <div
                  className={`w-5 h-5 rounded-full z-10 border-2 transition-all ${
                    active
                      ? "bg-green-500 border-green-500"
                      : "bg-white border-gray-300"
                  }`}
                />

                {/* Label */}
                <p
                  className={`text-[11px] mt-2 capitalize ${
                    active ? "text-green-600 font-medium" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            );
          })}

        </div>

        {/* Delivery Box (same style as Delivered Card) */}
      <div className="bg-gradient-to-r from-gray-50 to-white border rounded-xl p-4 text-center">

        <p className="text-xs text-gray-500 mb-1">
          Estimated Delivery Window
        </p>

<div className="text-sm font-medium text-gray-800 flex items-center justify-center gap-2">
  
  <span className="px-2 py-1 bg-gray-100 rounded-md">
    {order.estimated_delivery_from
      ? new Date(order.estimated_delivery_from).toLocaleDateString()
      : "-"}
  </span>

  <span className="text-gray-400">→</span>

  <span className="px-2 py-1 bg-gray-100 rounded-md">
    {order.estimated_delivery_to
      ? new Date(order.estimated_delivery_to).toLocaleDateString()
      : "-"}
  </span>

</div>

        <p className="text-[11px] text-gray-400 mt-1">
          Your order is on the way 🚚
        </p>
      </div>

      </div>
    </div>
  );
};

export default ActiveOrderCard;