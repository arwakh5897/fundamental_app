import React from "react";

const OrdersTimeline = ({ orders }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm">

      <h3 className="font-semibold mb-4">Recent Activity</h3>

      <div className="relative border-l pl-4 space-y-6">

        {orders.map((order, index) => (
          <div key={index} className="relative">

            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-buttons"></div>

            <div className="bg-input p-4 rounded-xl">

              <div className="flex justify-between items-center">
                <p className="font-semibold">{order.id}</p>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <p className="text-fullGray text-xs mt-1">
                {order.date}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default OrdersTimeline;