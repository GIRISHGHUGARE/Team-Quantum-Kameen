// controllers/course.controller.js
import { Course } from '../models/course.model.js';

// Add a new course
export const addCourse = async (req, res) => {
    const { title, description, content, price } = req.body;

    try {
        const newCourse = new Course({ title, description, content, price });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: 'Error adding course', error });
    }
};

// Get all courses
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isActive: true });
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving courses', error });
    }
};

// Get a single course by ID
export const getCourseById = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving course', error });
    }
};

// Update course details
export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description, content, price } = req.body;

    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { title, description, content, price },
            { new: true }
        );
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: 'Error updating course', error });
    }
};
export const deleteCourse = async (req, res) => {
    const courseId = req.params.id;

    try {
        // Find and delete the course by ID
        const course = await Course.findByIdAndDelete(courseId);

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        return res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        console.error("Error deleting course:", error);
        return res.status(500).json({ message: "Error deleting course", error });
    }
};