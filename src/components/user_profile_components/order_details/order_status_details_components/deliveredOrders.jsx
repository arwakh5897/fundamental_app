import React from "react";
import DeliveredOrderCard from "../../../card/delivered_order_card";

const DeliveredOrders = ({ orders }) => {

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-heading">
        Delivered Orders
      </h2>

      {orders.length === 0 && (
        <div className="text-center text-fullGray">
          No delivered orders
        </div>
      )}

      {orders.map((order, index) => (
        <DeliveredOrderCard key={index} order={order} />
      ))}
    </div>
  );
};

export default DeliveredOrders;