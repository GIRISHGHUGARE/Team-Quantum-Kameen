import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../../utils/Date";
import axios from "axios";

function DashboardPage() {
    const { user, logout } = useAuthStore();
    const [courses, setCourses] = useState([]);
    const [events, setEvents] = useState([]);
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

    const fetchEvents = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/events");
            setEvents(response.data);
        } catch (err) {
            setError("Failed to fetch events. Please try again later.");
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
        fetchEvents();
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
                    onClick={() => handleSectionChange("events")}
                    className="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg"
                >
                    Events
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

                    {loading ? (
                        <p>Loading courses...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courses.map((course) => (
                                <div
                                    key={course._id}
                                    className="p-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg shadow-md"
                                >
                                    <h4 className="text-xl font-bold mb-4">{course.name}</h4>
                                    <p>{course.description}</p>
                                    <div className="flex justify-between mt-6">
                                        <button
                                            onClick={() => handleEnrollCourse(course._id)}
                                            className="py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition duration-300"
                                        >
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {activeSection === "events" && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center mb-4">Upcoming Events</h3>
                    {loading ? (
                        <p>Loading events...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div>
                            {events.map((event) => (
                                <div key={event._id} className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md mb-4">
                                    <h4 className="text-xl font-bold mb-2">{event.name}</h4>
                                    <p>{event.description}</p>
                                    <p className="mt-2">Date: {event.date}</p>
                                </div>
                            ))}
                        </div>
                    )}
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
                <>
                    <div className='space-y-6'>
                        <motion.div
                            className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className='text-xl font-semibold text-green-400 mb-3'>Profile Information</h3>
                            <p className='text-gray-300'>Name: {user.name}</p>
                            <p className='text-gray-300'>Email: {user.email}</p>
                        </motion.div>
                        <motion.div
                            className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className='text-xl font-semibold text-green-400 mb-3'>Account Activity</h3>
                            <p className='text-gray-300'>
                                <span className='font-bold'>Joined: </span>
                                {new Date(user.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                            <p className='text-gray-300'>
                                <span className='font-bold'>Last Login: </span>

                                {formatDate(user.lastLogin)}
                            </p>
                        </motion.div>
                    </div>

                </>

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
        </motion.div>
    );
}

export default DashboardPage;
