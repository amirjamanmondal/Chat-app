import express from 'express';
import protectRoute from '../middleware/protectRoutes.js';
import {getUserSidebar} from '../controller/users.controller.js'

const router = express.Router();

router.get("/", protectRoute, getUserSidebar);

export default router;