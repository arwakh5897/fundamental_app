import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // API yahan call karni hai
  };

  return (
    <div className="bg-background  text-foreground">

      {/* HERO */}
        <h1 className="bg-menu lg:text-2xl font-bold text-center py-2 lg:py-4">Contact Us</h1>


      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 text-xs lg:text-sm lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT SIDE - INFO */}
        <div className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold text-heading mb-2">
              Get in Touch
            </h2>
            <p className="text-extraGray">
              Have questions, feedback, or need support? Our team is ready to assist you.
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border-color space-y-3">
            <p className="text-extraGray">
              📧 <span className="font-medium text-heading">Email:</span> support@example.com
            </p>
            <p className="text-extraGray">
              📞 <span className="font-medium text-heading">Phone:</span> +92 300 1234567
            </p>
            <p className="text-extraGray">
              📍 <span className="font-medium text-heading">Address:</span> Your City, Pakistan
            </p>
          </div>

          {/* EXTRA TRUST */}
          <div className="bg-halfWhite p-5 rounded-xl">
            <p className="text-sm text-extraGray">
              We typically respond within 24 hours. Your satisfaction is our priority.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-card p-6 rounded-xl border-color space-y-4"
        >

          <div>
            <label className="text-sm text-heading">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md bg-input outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="text-sm text-heading">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-md bg-input outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="text-sm text-heading">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full mt-1 p-2 rounded-md bg-input outline-none"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-buttons hover-bg-buttons w-full py-2 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default ContactUs;