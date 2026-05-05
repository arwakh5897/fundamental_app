import React from "react";
import { formatDate } from "../../../../utils/formatDate";

const OrdersTimeline = ({ orders = [] }) => {

  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-600";

      case "pending":
        return "bg-yellow-100 text-yellow-600";

      case "processing":
        return "bg-blue-100 text-blue-600";

      case "cancelled":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm">

      <h3 className="font-semibold mb-4">Recent Activity</h3>

      <div className="relative border-l pl-4 space-y-6">

        {orders.length === 0 ? (
            <p className="text-sm text-gray-500">No orders found</p>
          ) : (orders.map((order, index) => (
          <div key={index} className="relative">

            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-buttons"></div>

            <div className="bg-input p-4 rounded-xl">

              <div className="flex justify-between items-center">
                <p className="font-semibold">{order.items?.[0]?.product_name}</p>

                <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(order.status)}`}>
                  {order.status}
                </span>
              </div>

              <p className="text-fullGray text-xs mt-1">
                {formatDate(order.created_at)}
              </p>

            </div>

          </div>
        )))}

      </div>
    </div>
  );
};

export default OrdersTimeline;