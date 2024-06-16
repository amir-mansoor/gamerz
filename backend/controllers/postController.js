import asyncHandler from "../middlewares/asyncHandler.js";
import Post from "../models/postModel.js";

const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const post = await Post.create({ user: req.user._id, content });
  res.json({ msg: "Post created successfully" });
});

export { createPost };
