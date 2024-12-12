import express from "express";
import { getUsers, deleteUser, editUser } from "../controllers/admin.controller.js";
import { adminCheck } from '../middleware/adminCheck.js';
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();


// Admin routes
router.get("/users", verifyToken, adminCheck, getUsers);
router.delete("/user/:id", verifyToken, adminCheck, deleteUser);
router.put("/user/:id", verifyToken, adminCheck, editUser);

export default router;
