import React, { useState } from "react";
import { motion } from "framer-motion";

const Inquiry = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent 🚀");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* ✨ Subtle Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-100 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest text-gray-400">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900">
            Let’s Work Together
          </h2>

          <p className="text-gray-500 mt-3">
            Send a message and I’ll respond as soon as possible.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Inputs Grid */}
            <div className="grid md:grid-cols-2 gap-5">

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                required
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                required
              />
            </div>

            {/* Subject */}
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              required
            />

            {/* Message */}
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              rows="5"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
              required
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 rounded-xl bg-black text-white font-semibold shadow-md hover:shadow-xl transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Inquiry;