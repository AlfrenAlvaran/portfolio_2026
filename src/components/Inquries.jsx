import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Inquiry = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent 🚀");
          setForm({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          alert("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="inquire">
      
      {/* ✨ Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-100 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs tracking-widest text-gray-400">
            CONTACT
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 text-gray-900">
            Let’s Work Together
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Send a message and I’ll respond as soon as possible.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-100 shadow-lg md:shadow-xl rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            
            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg md:rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                required
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg md:rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
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
              className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg md:rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
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
              className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-lg md:rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
              required
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 sm:py-4 text-sm sm:text-base rounded-lg md:rounded-xl bg-black text-white font-semibold shadow-md hover:shadow-xl transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Inquiry;