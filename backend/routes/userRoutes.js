import { Router } from "express";
import {
  registerUser,
  loginUser,
  updateProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update").put(protect, updateProfile);
export default router;
