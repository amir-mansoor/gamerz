import asyncHandler from "../middlewares/asyncHandler.js";
import Post from "../models/postModel.js";

// create new post
const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const post = await Post.create({ user: req.user._id, content });
  res.json({ msg: "Post created successfully" });
});

// get single post using id
const getSinglePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("No post found with the given id");
  }
});

// delete your post
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (post) {
    await Post.deleteOne({ _id: post._id });
    res.json({ msg: "Post deleted successfully" });
  } else {
    res.status(404);
    throw new Error("No post found with the given id");
  }
});

export { createPost, getSinglePost, deletePost };
