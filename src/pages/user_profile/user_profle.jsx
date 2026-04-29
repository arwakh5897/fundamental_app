import React from "react";
import { useNavigate } from "react-router-dom";

import UserHero from "../../components/user_profile_components/user_details/user_hero";
import UserQuickInfo from "../../components/user_profile_components/user_details/quick_info";
import PaymentMethods from "../../components/user_profile_components/user_details/payment_methods";
import OrdersTimeline from "../../components/user_profile_components/user_details/orders_timeline";

const UserProfile = () => {
  const navigate = useNavigate();

  const user = {
    name: "User Name",
    phone: "03001234567",
    address: "Pattoki, Punjab, Pakistan",
    city: "Pattoki",
    province: "Punjab",
    zip: "55200",
    email: "user@example.com",
    joinDate: "12 Jan 2025",
  };

  const paymentMethods = [
    { type: "Visa", number: "**** **** **** 4242", expiry: "12/27" },
    { type: "JazzCash", number: "03001234567" },
  ];

  const orders = [
    { id: "#ORD123", status: "Delivered", date: "20 Apr 2026" },
    { id: "#ORD124", status: "Pending", date: "25 Apr 2026" },
  ];

  return (
    <div className="space-y-6 p-6">

      <UserHero
        user={user}
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