import React from "react";

const UserQuickInfo = ({ user }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">

      {[
        { label: "Phone", value: user.phone },
        { label: "Address", value: user.address },
        { label: "Status", value: "Active", status: true },
        { label: "City", value: user.city },
        { label: "Province", value: user.province },
        { label: "ZIP Code", value: user.zip },
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
  );
};

export default UserQuickInfo;