import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutImg1 from "./../assets/AboutImg1.png"
import AboutImg2 from "./../assets/AboutImg2.png";
import AboutImg3 from "./../assets/AboutImg3.png";

const About = () => {
    // Images for the carousel
    const images = [AboutImg1, AboutImg2, AboutImg3];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to rotate images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [images.length]);

    // Framer Motion variants for text animation
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 space-y-8 lg:space-y-0">
            {/* About Us Text Section */}
            <motion.div
                className="lg:w-1/2 text-center lg:text-left mt-10 py-10 space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is in view
                variants={textVariants}
            >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    About Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    We are committed to empowering women and sustaining futures through
                    innovative solutions. Our mission is to drive positive change,
                    promote sustainability, and create opportunities for growth in
                    communities across the world. We empower rural women in India through education, sustainable practices, and community collaboration.
                </p>
                {/* View More Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-10 px-20 py-4 w-full lg:w-auto text-lg font-bold text-white bg-olive rounded-full hover:bg-green-700 transition-all duration-300"
                >
                    View More
                </motion.button>
            </motion.div>

            {/* Rotating Image Section */}
            <div
                className="lg:w-1/2 flex items-center justify-center relative"
                style={{ marginTop: "-100px" }} // Adjusting the vertical positioning
            >
                {images.map((image, index) => {
                    const visibilityClass =
                        index === currentIndex
                            ? "opacity-100 scale-100 z-30"
                            : index === (currentIndex + 1) % images.length
                                ? "opacity-70 scale-90 z-20"
                                : "opacity-0 scale-80 z-10";

                    return (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`About Us ${index + 1}`}
                            className={`absolute w-3/4 h-auto object-cover transition-all duration-1000 ease-in-out ${visibilityClass}`}
                            style={{
                                top: index === currentIndex ? "0%" : "20%",
                                left: index === currentIndex ? "10%" : "20%",
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default About;
