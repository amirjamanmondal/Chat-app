import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js'
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongodb from "./db/connectToMongobd.js"

const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

app.use(express.json()); // to parse incoming requests with payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => {
    connectToMongodb();
    console.log(`server running on port ${PORT}`)
})