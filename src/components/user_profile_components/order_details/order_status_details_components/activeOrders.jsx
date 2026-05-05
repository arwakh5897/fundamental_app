import React from "react";
import ActiveOrderCard from "../../../card/active_order_card";

const ActiveOrders = ({ orders }) => {

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-heading">
        Active Orders
      </h2>

      {orders.length === 0 && (
        <div className="text-center text-fullGray">
          No active orders
        </div>
      )}

      {orders.map((order, index) => (
        <ActiveOrderCard key={index} order={order} />
      ))}
    </div>
  );
};

export default ActiveOrders;