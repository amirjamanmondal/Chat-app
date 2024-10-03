import bcrypt from 'bcryptjs';
import User from '../models/user.model.js'
import generateTokenandSetCookie from '../utils/generateTokens.js';

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmpassword, gender } = req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({ error: "password don't match", password, confirmpassword })
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "username already exits" })
        }
        // HASH PASSWORD HERE

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const transformedName = fullName.split(" ");

        const profilePic = `https://ui-avatars.com/api/?name=${transformedName}`;


        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilepic: profilePic
        });

        if (newUser) {
            // GENERATE JWT TOKEN HERE
            await newUser.save();
            generateTokenandSetCookie(newUser._id, res);

            return res.status(201).json({ message: "User created Successfully", _id: newUser._id, username: newUser.username })
        } else {
            res.status(400).json({ error: "invalid user data" })
        }
        res.status(201).json({message: "user not created "})
    } catch (error) {
        console.log("Error in signup Controller", error.message);
        return res.status(500).json({ error: "internal server error during signup" })
    }
}



export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username and password" })
        }

        generateTokenandSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
        })
    } catch (error) {
        console.log("Error in Login Controller", error.message);
        return res.status(500).json({ error: "internal server error during login" })
    }



}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out Successfully" })
    } catch (error) {
        console.log("Error in logout Controller", error.message);
        return res.status(500).json({ error: "internal server error during logout" })
    }
}

