import React from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const user = {
    name: "Muhammad Zain",
    phone: "03001234567",
    address: "Pattoki, Punjab, Pakistan",
    email: "zain@example.com",
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
    <div className="space-y-6">

      {/* 🔷 HERO PROFILE */}
      <div className="relative rounded-3xl p-6 bg-menu-gradiant text-white shadow-lg overflow-hidden">

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">

            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
              {user.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-sm text-white/80">{user.email}</p>
              <p className="text-xs text-white/60 mt-1">
                Joined {user.joinDate}
              </p>
            </div>
          </div>

          <button 
          className="bg-buttons hover:cursor-pointer hover-bg-buttons px-4 py-2 rounded-lg text-sm"
          onClick={()=>navigate("/pages/edit-profile")}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* 🔷 QUICK INFO CARDS */}
      <div className="grid md:grid-cols-3 gap-4">

        {[
          { label: "Phone", value: user.phone },
          { label: "Address", value: user.address },
          { label: "Status", value: "Active", status: true },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-input p-4 rounded-2xl hover:scale-[1.02] transition shadow-sm"
          >
            <p className="text-fullGray text-xs mb-1">{item.label}</p>

            {item.status ? (
              <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
                Active
              </span>
            ) : (
              <p className="font-semibold text-sm">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      {/* 🔷 MAIN CONTENT */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* 💳 PAYMENT METHODS */}
        <div className="border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold mb-4">Payment Methods</h3>

          <div className="space-y-3">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-input rounded-xl hover:bg-gray-100 transition"
              >
                <div>
                  <p className="font-semibold">{method.type}</p>
                  <p className="text-fullGray text-xs">
                    {method.number}
                  </p>
                </div>

                {method.expiry && (
                  <span className="text-xs text-fullGray">
                    {method.expiry}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 📦 ORDERS TIMELINE */}
        <div className=" border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold mb-4">Recent Activity</h3>

          <div className="relative border-l pl-4 space-y-6">
            {orders.map((order, index) => (
              <div key={index} className="relative">

                {/* dot */}
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

      </div>

    </div>
  );
};

export default UserDetails;