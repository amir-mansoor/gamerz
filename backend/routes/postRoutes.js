import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createPost } from "../controllers/postController.js";
const router = express.Router();

router.route("/create").post(protect, createPost);
export default router;
