import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generatejwt.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  console.log(userExist);
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

export { registerUser };
