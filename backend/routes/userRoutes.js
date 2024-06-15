import { Router } from "express";
import {
  registerUser,
  loginUser,
  updateProfile,
  sendFriendRequest,
  acceptFriendRequest,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update").put(protect, updateProfile);
router.route("/request/:id").put(protect, sendFriendRequest);
router.route("/accept/:id").put(protect, acceptFriendRequest);
export default router;
