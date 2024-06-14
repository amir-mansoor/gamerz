import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.find({ email });

  if (user) {
    res.status(401);
    throw new Error("User Already Exist With This Email");
  }
});

export { registerUser };
