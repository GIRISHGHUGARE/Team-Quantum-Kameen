import React from "react";
import { User, Mail, MessageSquare } from "lucide-react"; // Importing Lucide icons
import { motion } from "framer-motion"; // Importing framer motion
import ContactImg from "./../assets/ContactImg.png"

const ContactUs = () => {
  return (
    <section id="contact">
    <div className="p-8 md:p-16">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Side: Form */}
        <motion.div
          className="w-full md:w-1/3 bg-white p-8 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>

          {/* Name Input */}
          <div className="flex items-center border-b border-gray-300 py-2 mb-4">
            <User className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent focus:outline-none text-gray-700 py-2 px-4 border-2 border-olive rounded-lg"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center border-b border-gray-300 py-2 mb-4">
            <Mail className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent focus:outline-none text-gray-700 py-2 px-4 border-2 border-olive rounded-lg"
            />
          </div>

          {/* Message Input */}
          <div className="flex items-start border-b border-gray-300 py-2 mb-6">
            <MessageSquare className="text-gray-500 mr-3" />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-transparent focus:outline-none text-gray-700 py-2 px-4 border-2 border-olive rounded-lg"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 bg-olive text-white rounded-lg hover:bg-brown transition">
            Submit
          </button>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="w-full md:w-1/3 flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ContactImg}
            alt="Contact Us Illustration"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;
