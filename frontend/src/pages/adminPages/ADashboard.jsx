import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import axios from "axios";

function ADashboard() {
    const { user, logout } = useAuthStore();

    const [courses, setCourses] = useState([]);
    const [users, setUsers] = useState([]); {/* Add this line to define the users state */ }
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSection, setActiveSection] = useState("courses"); // to manage active section

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

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/users"); // API endpoint to get users
            setUsers(response.data);
        } catch (err) {
            setError("Failed to fetch users. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCourse = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/courses/${id}`);
            setCourses((prevCourses) => prevCourses.filter((course) => course._id !== id));
        } catch (err) {
            alert("Failed to delete course.");
        }
    };

    const handleAddCourse = () => {
        alert("Redirect to Add Course page or show a form modal!");
    };

    const handleEditCourse = (id) => {
        alert(`Edit Course with ID: ${id}`);
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/users/${id}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (err) {
            alert("Failed to delete user.");
        }
    };

    const handleEditUser = (id) => {
        alert(`Edit User with ID: ${id}`);
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    useEffect(() => {
        if (activeSection === "courses") {
            fetchCourses();
        } else if (activeSection === "users") {
            fetchUsers(); {/* Fetch users when the users section is active */ }
        }
        // Add logic for other sections as needed (e.g., Events, etc.)
    }, [activeSection]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
        >
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-olive to-grey text-transparent bg-clip-text">
                Admin Dashboard
            </h2>

            {/* Section Buttons */}
            <div className="space-x-4 mb-6 text-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("courses")}
                    className="py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg"
                >
                    Courses
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("users")}
                    className="py-2 px-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-lg"
                >
                    Users
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("events")}
                    className="py-2 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-lg"
                >
                    Events
                </motion.button>
            </div>

            {/* Courses Section */}
            {activeSection === "courses" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddCourse}
                        className="w-full py-3 px-4 bg-gradient-to-r from-olive to-brown text-white font-bold rounded-lg shadow-lg hover:from-grey hover:to-black focus:outline-none focus:ring-2 focus:ring-grey focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                    >
                        Add New Course
                    </motion.button>

                    {loading ? (
                        <p className="text-gray-300 text-center">Loading courses...</p>
                    ) : error ? (
                        <p className="text-red-400 text-center">{error}</p>
                    ) : (
                        <div className="space-y-6 mt-6">
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
                                    <div className="flex justify-end space-x-4 mt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleEditCourse(course._id)}
                                            className="py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none"
                                        >
                                            Edit
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleDeleteCourse(course._id)}
                                            className="py-2 px-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:from-red-600 hover:to-pink-700 focus:outline-none"
                                        >
                                            Delete
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            )}

            {/* Users Section */}
            {activeSection === "users" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-2xl text-white text-center">Manage Users</h3>
                    {loading ? (
                        <p className="text-gray-300 text-center">Loading users...</p>
                    ) : error ? (
                        <p className="text-red-400 text-center">{error}</p>
                    ) : (
                        <div className="space-y-6 mt-6">
                            {users.map((user) => (
                                <motion.div
                                    key={user._id}
                                    className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-xl font-semibold text-blue-400 mb-3">
                                        {user.name}
                                    </h3>
                                    <p className="text-gray-300">
                                        <span className="font-bold">Email: </span>
                                        {user.email}
                                    </p>
                                    <p className="text-gray-300">
                                        <span className="font-bold">Role: </span>
                                        {user.role}
                                    </p>
                                    <div className="flex justify-end space-x-4 mt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleEditUser(user._id)}
                                            className="py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg"
                                        >
                                            Edit
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="py-2 px-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold rounded-lg shadow-lg"
                                        >
                                            Delete
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            )}

            {/* Events Section */}
            {activeSection === "events" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-2xl text-white text-center">Manage Events</h3>
                    {/* Add your event management functionalities here */}
                </motion.div>
            )}

            {/* Logout Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="w-full py-3 px-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-bold rounded-lg shadow-lg hover:from-gray-700 hover:to-black focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900 mt-6"
            >
                Logout
            </motion.button>
        </motion.div>
    );
}

export default ADashboard;
