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

// send friend request controller
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

// accept friend request controller
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
    user.friends.push(req.user._id);
    req.user.friends.push(user._id);

    req.user.requests = req.user.requests.filter(
      (id) => id.toString() !== user._id.toString()
    );
    await user.save();
    await req.user.save();
    res.status(200).json({ msg: "Request accepted" });
  }
});

// add social links to profile
const addSocialLinks = asyncHandler(async (req, res) => {
  const { twitter, instagram, facebook } = req.body;
  console.log(twitter, instagram, facebook);
  req.user.social = { twitter, instagram, facebook };
  await req.user.save();
  res.json({ msg: "Links added to profile" });
});

// Get single user.
const getSingleUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  }
});

// decline request
const declineRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  req.user.requests.filter((requestedId) => requestedId !== id);
  await req.user.save();
  res.json({ msg: "Request declined" });
});

//  ***********Admin controllers***********

// Get all users for admin dashboard
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password -requests");
  res.json(users);
});

// delete user
const deleteUser = asyncHandler(async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });

  res.json({ msg: "User deleted successfully." });
});

const verifyUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  // need to add verify logic according to the criteria
});

export {
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
};
