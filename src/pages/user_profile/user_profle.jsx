import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchOrders } from "../../api/data";
import { useAuth } from "../../context/authContext";

import UserHero from "../../components/user_profile_components/user_details/user_hero";
import UserQuickInfo from "../../components/user_profile_components/user_details/quick_info";
import PaymentMethods from "../../components/user_profile_components/user_details/payment_methods";
import OrdersTimeline from "../../components/user_profile_components/user_details/orders_timeline";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };
    loadOrders();
  }, []);

  if (!user) return null; // or loading / redirect

  const paymentMethods = [
    { type: "Visa", number: "**** **** **** 4242", expiry: "12/27" },
    { type: "JazzCash", number: user.phone },
  ];

  return (
    <div className="space-y-6 p-6">

      <UserHero
        user={user}   // 🔥 now real user
        onEdit={() => navigate("/pages/edit-profile")}
      />

      <UserQuickInfo user={user} />

      <div className="grid lg:grid-cols-2 gap-6">

        <PaymentMethods paymentMethods={paymentMethods} />

        <OrdersTimeline orders={orders} />

      </div>

    </div>
  );
};

export default UserProfile;