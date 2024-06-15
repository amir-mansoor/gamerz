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

// update user profile

const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.country = req.body.country || user.country;
    user.bio = req.body.bio || user.bio;
    if (req.body.password) {
      user.password = req.body.password;
    }
  }

  await user.save();
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    bio: user.bio,
    location: user.country,
    social: user.social,
  });
});

const sendFriendRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (user.requests.includes(req.user._id)) {
    res.status(400);
    throw new Error("Request already send.");
  }

  user.requests.push(req.user._id);
  await user.save();
  res.status(200).json({ msg: "Request sent" });
});

const acceptFriendRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  if (user.friends.includes(req.user._id)) {
    res.status(400);
    throw new Error("Already Friends");
  } else {
    user.friends.push(user._id);
    req.user.friends.push(req.user._id);
    await user.save();
    await req.user.save();
    res.status(200).json({ msg: "Request accepted" });
  }
});

export {
  registerUser,
  loginUser,
  updateProfile,
  sendFriendRequest,
  acceptFriendRequest,
};
