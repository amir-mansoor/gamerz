import { Router } from "express";
import {
  registerUser,
  loginUser,
  updateProfile,
  sendFriendRequest,
  acceptFriendRequest,
  addSocialLinks,
  getAllUsers,
  getSingleUser,
  deleteUser,
  declineRequest,
} from "../controllers/userController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getSingleUser/:id").get(protect, getSingleUser);
router.route("/update").put(protect, updateProfile);
router.route("/request/:id").put(protect, sendFriendRequest);
router.route("/accept/:id").put(protect, acceptFriendRequest);
router.route("/addSocialLinks").put(protect, addSocialLinks);
router.route("/decline/:id").put(protect, declineRequest);
// Admin Routes
router.route("/getAllUsers").get(protect, admin, getAllUsers);
router.route("/deleteUser/:id").delete(protect, admin, deleteUser);
export default router;
