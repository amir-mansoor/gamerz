import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generatejwt.js";

// Create New Account user registration
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist With This Email");
  }

  const user = await User.create({
    name,
    email,
    password,
    country: "",
    bio: "",
  });
  if (user) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      bio: user.bio,
      location: user.country,
      social: user.social,
    });
  }
});

// Login to there account
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      bio: user.bio,
      location: user.country,
      social: user.social,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials.");
  }
});

export { registerUser, loginUser };
