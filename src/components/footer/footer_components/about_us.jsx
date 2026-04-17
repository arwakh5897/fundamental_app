import React from "react";

const AboutUs = () => {

  const links = [
    { name: "Our Story", key: "story", href: "/our-story" },
    { name: "Sustainability", key: "sustainability", href: "/sustainability" },
    { name: "Our Philosophy", key: "philosophy", href: "/philosophy" },
  ];

  return (
    <div className="text-lg">
      <div className="box">
        <p className="box-heading">
          About Us
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

export default AboutUs;