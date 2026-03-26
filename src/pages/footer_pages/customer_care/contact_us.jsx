import React from "react";

const ContactUs = () => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <p className="text-gray-600 mb-4">
        Have questions? We'd love to hear from you.
      </p>

      <div className="space-y-2 text-gray-600">
        <p>Email: support@example.com</p>
        <p>Phone: +92 300 1234567</p>
        <p>Address: Your City, Pakistan</p>
      </div>
    </div>
  );
};

export default ContactUs;