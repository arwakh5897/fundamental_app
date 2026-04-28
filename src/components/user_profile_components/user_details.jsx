import React from "react";

const UserDetails = () => {
  const user = {
    name: "Muhammad Zain",
    phone: "03001234567",
    address: "Pattoki, Punjab, Pakistan",
    email: "zain@example.com",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold ">Profile</h2>
        <button className="text-sm bg-primary px-4 py-1.5 rounded-lg hover:opacity-90 transition">
          Edit
        </button>
      </div>

      {/* Profile Top */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
          {user.name.charAt(0)}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {user.name}
          </h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Phone</p>
          <p className="font-medium text-gray-800">{user.phone}</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Address</p>
          <p className="font-medium text-gray-800">{user.address}</p>
        </div>

      </div>
    </div>
  );
};

export default UserDetails;