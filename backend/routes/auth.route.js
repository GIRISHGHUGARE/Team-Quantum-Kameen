import express from "express";
import { checkAuth, forgotPassword, login, logout, resetPassword, signup, verifyEmail } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import passport from 'passport';
import { User } from "../models/user.model.js";
import { getUsers, deleteUser, editUser } from "../controllers/admin.controller.js";
import { adminCheck } from '../middleware/adminCheck.js';
const router = express.Router();


// Admin routes
router.get("/admin/users", adminCheck, getUsers);
router.delete("/admin/user/:id", adminCheck, deleteUser);
router.put("/admin/user/:id", adminCheck, editUser);


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/check-auth", verifyToken, checkAuth);

// Google login route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback route
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    async (req, res) => {
        try {
            const { email, name, picture } = req.user; // Extract details from Google profile
            let user = await User.findOne({ email });

            // If user does not exist, create new user
            if (!user) {
                user = new User({
                    name,
                    email,
                    role: "user", // Default role
                    isVerified: true, // Mark as verified by default (since it's a social login)
                });
                await user.save();
            }

            // Generate token and set cookie
            generateTokenAndSetCookie(res, user._id);

            // Redirect to the dashboard or home page after successful login
            res.redirect('/');
        } catch (error) {
            console.error("Error in Google authentication", error);
            res.redirect('/login'); // Redirect to login on failure
        }
    }
);

export default router;
