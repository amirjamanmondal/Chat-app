import express from 'express';
import  {sendMessage, getMessages}  from '../controller/message.controller.js';
import protectRoute from '../middleware/protectRoutes.js';

const router = express.Router();

router.get("/:receiverId", protectRoute, getMessages)
router.post("/send/:receiverId", protectRoute, sendMessage)


export default router;