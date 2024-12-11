// routes/courses.routes.js
import express from 'express';
import * as courseController from '../controllers/course.controller.js';
import { adminCheck } from '../middleware/adminCheck.js';

const router = express.Router();
//Admin Route
// Add a new course
router.post('/add', adminCheck, courseController.addCourse);
// Update course details
router.put('/:id', adminCheck, courseController.updateCourse);
// Delete course details
router.delete('/courses/:id', adminCheck, courseController.deleteCourse);

//Client Route
// Get all courses
router.get('/', courseController.getAllCourses);
// Get a single course by ID
router.get('/:id', courseController.getCourseById);



export default router;
