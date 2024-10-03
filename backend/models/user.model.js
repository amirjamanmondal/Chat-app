import mongoose from "mongoose";

const userScheema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilepic: {
        type: String,
        default: "",
    },
}, { timestamps: true })

const User = mongoose.model("User", userScheema);

export default User;