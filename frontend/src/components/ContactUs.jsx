import React from "react";
import { User, Mail, MessageSquare } from "lucide-react"; // Importing Lucide icons

const ContactUs = () => {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-8">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/3 bg-white p-8 shadow-lg rounded-lg">

        {/* Name Input */}
        <div className="flex items-center border-b border-gray-300 py-2 mb-4">
          <User className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent focus:outline-none text-gray-700 py-2 px-4 border-2 border-sky-400 rounded-lg"
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center border-b border-gray-300 py-2 mb-4">
          <Mail className="text-gray-500 mr-3" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent focus:outline-none text-gray-700 py-2 px-4 border-2 border-sky-400 rounded-lg"
          />
        </div>

        {/* Message Input */}
        <div className="flex items-start border-b border-gray-300 py-2 mb-6">
          <MessageSquare className="text-gray-500 mr-3" />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full bg-transparent focus:outline-none text-gray-700 py-2 px-4 border-2 border-sky-400 rounded-lg"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
          Submit
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400"
          alt="Contact Us Illustration"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ContactUs;
