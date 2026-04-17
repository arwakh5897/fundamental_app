import React from "react";

const CustomerCare = () => {

  const links = [
    { name: "Contact Us", key: "contact", href: "/contact" },
    { name: "FAQ's", key: "faq", href: "/faq" },
    { name: "Refund Policy", key: "refund", href: "/refund-policy" },
  ];

  return (
    <div className="text-lg flex justify-end">
      <div className="box">
        <p className="box-heading">
          Customer Care
        </p>

        <div className="box-container">

          {links.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="box-item"
            >
              <span>{item.name}</span>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CustomerCare;