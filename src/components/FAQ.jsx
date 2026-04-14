import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I build full-stack web applications, dashboards, and scalable systems using React, Node.js, and modern tools.",
    },
    {
      question: "Do you work with clients worldwide?",
      answer:
        "Yes, I work remotely with clients globally using modern communication tools.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "React, JavaScript, Node.js, Express, MongoDB, and modern UI/UX systems.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Usually between a few weeks to a couple of months depending on complexity.",
    },
    {
      question: "Can you handle full-stack development?",
      answer:
        "Yes, I handle frontend, backend, APIs, authentication, and deployment.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      id="faq"
    >
      <div className="max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-widest text-gray-500">
            FAQ
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <div
                key={i}
                className={`rounded-xl md:rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                  isOpen
                    ? "border-blue-500 shadow-lg md:shadow-xl bg-white"
                    : "border-gray-200 bg-white/70"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="
                    w-full 
                    flex justify-between items-center 
                    p-4 sm:p-5 md:p-6 
                    text-left
                  "
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold pr-4">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`text-xl sm:text-2xl font-light flex-shrink-0 ${
                      isOpen ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden px-4 sm:px-5 md:px-6"
                    >
                      <p className="text-gray-600 text-sm sm:text-base pb-4 md:pb-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;