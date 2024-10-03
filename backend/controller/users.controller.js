import User from "../models/user.model.js";


export const getUserSidebar = async (req, res) => {
    try {
        const loggedUser = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedUser } }).select("-password");

        if (!filteredUsers ) {
            return res.status(404).json({ error: "Users not found" });
        }

        return res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUserSidebar Controller", error.message);
        return res.status(500).json({ error: "Internal server error during getting users" });
    }
};