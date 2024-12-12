import { User } from "../models/user.model.js";

// Middleware to check if the user is an admin
export const adminCheck = async (req, res, next) => {
    try {
        // Assuming you have the user in `req.user` (after JWT verification)
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: "Access denied, admin only" });
        }

        next(); // If user is admin, proceed to the next middleware
    } catch (error) {
        console.error("Admin check error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
