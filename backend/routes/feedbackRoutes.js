import express from "express";
import { admin, protect } from "../middlewares/authMiddleware.js";
import {
  changeFeedBackStatus,
  getFeedBacks,
  sendFeedBack,
  deleteFeedBack,
} from "../controllers/feedbackController.js";
const router = express.Router();

router.route("/send").post(protect, sendFeedBack);
// admin routes
router.route("/status/:id").put(protect, admin, changeFeedBackStatus);
router.route("/getFeedBacks?").get(protect, admin, getFeedBacks);
router.route("/deleteFeedBack/:id").delete(protect, admin, deleteFeedBack);
export default router;
