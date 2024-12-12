import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../../utils/Date";
import axios from "axios";
import profileplaceholder from "./../../assets/profileplaceholder.png"

function DashboardPage() {
    const { user, logout } = useAuthStore();
    const [courses, setCourses] = useState([]);
    const [products, setProducts] = useState([]);
    const [microloans, setMicroloans] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState("courses");

    const handleLogout = () => {
        logout();
    };

    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/courses");
            setCourses(response.data);
        } catch (err) {
            setError("Failed to fetch courses. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/products"); // Update URL to your API
            setProducts(response.data);
        } catch (err) {
            console.error("Failed to fetch products:", err);
        }
    };

    const fetchMicroloans = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/microloans");
            setMicroloans(response.data);
        } catch (err) {
            setError("Failed to fetch microloans. Please try again later.");
        }
    };

    const handleEnrollCourse = async (courseId) => {
        try {
            const response = await axios.post(`http://localhost:8000/api/v1/enroll`, { courseId });
            alert(response.data.message);
        } catch (err) {
            alert("Failed to enroll. Please try again.");
        }
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    useEffect(() => {
        fetchCourses();
        fetchProducts();
        fetchMicroloans();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
        >
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
                Welcome, {user ? user.name : "Guest"}!
            </h2>

            {/* Section Buttons */}
            <div className="space-x-4 mb-6 text-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("courses")}
                    className="py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg"
                >
                    Courses
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("marketplace")}
                    className="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg"
                >
                    Marketplace
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("microloans")}
                    className="py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg"
                >
                    Microloans
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("community")}
                    className="py-2 px-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg"
                >
                    Community
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("profile")}
                    className="py-2 px-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg"
                >
                    Profile
                </motion.button>

            </div>

            {/* Active Section Content */}
            {activeSection === "courses" && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center mb-4">Available Courses</h3>


                    <div className="flex-grow space-y-6">
                        {/* Course Information */}
                        <motion.div
                            className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {courses.map((course) => (
                                <motion.div
                                    key={course._id}
                                    className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-xl font-semibold text-blue-400 mb-3">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-300">
                                        <span className="font-bold">Description: </span>
                                        {course.description}
                                    </p>
                                    <p className="text-gray-300">
                                        <span className="font-bold">Price: </span>₹{course.price}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            {activeSection === "marketplace" && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center mb-4">Shop here</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <motion.div
                                    key={index}
                                    className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 shadow-md flex flex-col items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <img
                                        src={product.image || placeholderImage}
                                        alt={product.name}
                                        className="w-32 h-32 object-cover rounded-md mb-4"
                                    />
                                    <h4 className="text-lg font-semibold text-white text-center mb-2">
                                        {product.name}
                                    </h4>
                                    <p className="text-green-400 font-medium text-center mb-4">
                                        ₹{product.price}
                                    </p>
                                    <button
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition duration-300"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400">No products available.</p>
                        )}
                    </div>
                </div>
            )}

            {activeSection === "microloans" && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center mb-4">Available Microloans</h3>
                    {loading ? (
                        <p>Loading microloans...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div>
                            {microloans.map((loan) => (
                                <div key={loan._id} className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md mb-4">
                                    <h4 className="text-xl font-bold mb-2">{loan.name}</h4>
                                    <p>{loan.description}</p>
                                    <p className="mt-2">Amount: ₹{loan.amount}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}


            {activeSection === "profile" && (
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 relative">
                    {/* Profile Photo Container */}
                    <div className="relative">
                        <motion.div
                            className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <img
                                src={user.profilePhoto || profileplaceholder}
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Edit Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute bottom-[-20px] left-1/2 p-3 bg-grey hover:bg-brown text-white rounded-full shadow-md transition duration-300"
                            onClick={() => alert("Edit Profile clicked!")} // Replace with your edit handler
                        >
                            {/* Pencil Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.068 19.645a4.5 4.5 0 01-1.591.999l-3.326 1.11 1.11-3.326a4.5 4.5 0 01.999-1.591L16.862 3.487z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 6.75L16.5 12.75"
                                />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Profile Details */}
                    <div className="flex-grow space-y-6">
                        {/* Profile Information */}
                        <motion.div
                            className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xl font-semibold text-olive mb-3">
                                Profile Information
                            </h3>
                            <p className="text-gray-300">
                                <span className="font-bold">Name: </span>
                                {user.name}
                            </p>
                            <p className="text-gray-300">
                                <span className="font-bold">Email: </span>
                                {user.email}
                            </p>
                        </motion.div>

                        {/* Account Activity */}
                        <motion.div
                            className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="text-xl font-semibold text-olive mb-3">
                                Account Activity
                            </h3>
                            <p className="text-gray-300">
                                <span className="font-bold">Joined: </span>
                                {new Date(user.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                            <p className="text-gray-300">
                                <span className="font-bold">Last Login: </span>
                                {formatDate(user.lastLogin)}
                            </p>
                        </motion.div>
                    </div>
                </div>
            )}


            {/* Logout Button */}
            <div className="mt-6 text-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="py-2 px-4 bg-red-500 text-white font-bold rounded-lg transition duration-300"
                >
                    Logout
                </motion.button>
            </div>
        </motion.div >
    );
}

export default DashboardPage;
