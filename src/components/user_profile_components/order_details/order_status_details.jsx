import React, { useEffect, useState } from "react";
import { fetchOrders } from "../../../api/data";
import ActiveOrders from "./order_status_details_components/activeOrders";
import DeliveredOrders from "./order_status_details_components/deliveredOrders";

const OrderStatusDetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const data = await fetchOrders();
      setOrders(data || []);
    };

    loadOrders();
  }, []);

  const deliveredOrders = orders.filter(o => o.status === "delivered");
  const activeOrders = orders.filter(o => o.status !== "delivered");

  return (
    <div className="space-y-10">
      <ActiveOrders orders={activeOrders} />
      <DeliveredOrders orders={deliveredOrders} />
    </div>
  );
};

export default OrderStatusDetails;