import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.find({ email });

  if (userExist) {
    res.status(401);
    throw new Error("User Already Exist With This Email");
  }

  const newUser = await User.create({ name, email, password });
});

export { registerUser };
