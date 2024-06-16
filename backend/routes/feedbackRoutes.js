import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { sendFeedBack } from "../controllers/feedbackController.js";
const router = express.Router();

router.route("/send").post(protect, sendFeedBack);

export default router;
