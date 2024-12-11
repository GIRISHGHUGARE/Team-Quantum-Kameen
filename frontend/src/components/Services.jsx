import React, { useState } from "react";
import { motion } from "framer-motion"; 
import Service1 from "./../assets/Service1.png";
import Service2 from "./../assets/Service2.jpg";
import Service3 from "./../assets/Service3.jpg";
import Service4 from "./../assets/Service4.png";

const servicesData = [
  {
    title: "Courses",
    description: "Learn about sustainable agriculture with hands-on courses.",
    buttonText: "Explore Courses",
    image: Service1,
  },
  {
    title: "Microloans",
    description:
      "Access microloans to fund your sustainable business ventures.",
    buttonText: "Get Started",
    image: Service2,
  },
  {
    title: "Marketplace",
    description:
      "Shop eco-friendly products and resources in our marketplace.",
    buttonText: "Visit Marketplace",
    image: Service3,
  },
  {
    title: "Community",
    description:
      "Build a community with the like-minded peoples and share ideas.",
    buttonText: "Create Community",
    image: Service4,
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="services" className="py-16 px-6 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Card */}
          <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500">
            {/* Image Content */}
            <div className="flex-1">
              <img
                src={servicesData[currentIndex].image}
                alt={servicesData[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="p-8 flex-1">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                {servicesData[currentIndex].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {servicesData[currentIndex].description}
              </p>
              <button className="px-6 py-3 bg-olive text-white rounded-lg shadow-md hover:scale-105 transition-transform">
                {servicesData[currentIndex].buttonText}
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-olive text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-olive text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            &#8594;
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
