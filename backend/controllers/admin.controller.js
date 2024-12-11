export const getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch users.",
        });
    }
};
export const deleteUser = async (req, res) => {
    const { id } = req.params; // Get user ID from URL params
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        await user.remove(); // Remove user from the database
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete user.",
        });
    }
};
export const editUser = async (req, res) => {
    const { id } = req.params; // Get user ID from URL params
    const { name, email, role, isVerified } = req.body; // Get the updated user data from the request body

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Update user details
        user.name = name || user.name;
        user.email = email || user.email;
        user.role = role || user.role;
        user.isVerified = isVerified !== undefined ? isVerified : user.isVerified;

        await user.save();

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user,
        });
    } catch (error) {
        console.error("Error editing user:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update user.",
        });
    }
};
