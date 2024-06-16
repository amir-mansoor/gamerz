import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createPost,
  deletePost,
  getSinglePost,
  updatePost,
} from "../controllers/postController.js";
const router = express.Router();

router.route("/create").post(protect, createPost);
router.route("/getSinglePost/:id").get(protect, getSinglePost);
router.route("/deletePost/:id").delete(protect, deletePost);
router.route("/updatePost/:id").put(protect, updatePost);
export default router;