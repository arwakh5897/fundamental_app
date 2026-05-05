const ActiveOrderCard = ({ order }) => {

  const steps = ["pending", "approved", "shipped", "delivered"];

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "approved":
        return "bg-blue-100 text-blue-700";
      case "shipped":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const currentStep = steps.indexOf(order.status);

  return (
    <div className="rounded-2xl shadow-md p-6 border border-color bg-background">

      {/* Header */}
      <div className="flex justify-between mb-5">
        <h2 className="text-lg font-semibold text-heading">
          Order Status
        </h2>
        <span className="text-xs text-fullGray">Order #{order.id}</span>
      </div>

      {/* Status */}
      <div className="text-center mb-6">
        <span className={`px-4 py-2 rounded-full ${getStatusColor(order.status)}`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>

      {/* Steps */}
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center relative"
                  >
                    {i !== steps.length - 1 && (
                      <div
                        className={`absolute top-2 left-1/2 w-full h-1 ${
                          i < currentStep ? "bg-green-500" : "bg-line"
                        }`}
                      />
                    )}

                    <div
                      className={`w-5 h-5 rounded-full z-10 ${
                        i <= currentStep ? "bg-green-500" : "bg-line"
                      }`}
                    />

                    <p className="text-xs mt-2 text-fullGray">
                      {step.charAt(0).toUpperCase() + step.slice(1)}
                    </p>
                  </div>
                ))}
              </div>

    </div>
  );
};

export default ActiveOrderCard;