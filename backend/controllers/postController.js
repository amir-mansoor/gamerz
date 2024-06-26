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
    if (post.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You cannot delete this post");
    }
    if (post) {
      await Post.deleteOne({ _id: post._id });
      res.json({ msg: "Post deleted successfully" });
    } else {
      res.status(404);
      throw new Error("No post found with the given id");
    }
  } else {
    res.status(404);
    throw new Error("No post found.");
  }
});

// update post

const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    if (post.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You cannot update this post");
    }
    const { content } = req.body;
    if (post) {
      post.content = content;
      await post.save();
      res.json({ msg: "post updated successfully" });
    } else {
      res.status(404);
      throw new Error("Post not found");
    }
  } else {
    res.status(404);
    throw new Error("No post found");
  }
});

// get my posts
const getMyPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user._id });
  res.json(posts);
});

// Like and dislike post

const likePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  const alreadyLiked = post.likes.indexOf(req.user._id);

  if (post) {
    if (alreadyLiked === 0) {
      post.likes.splice(req.user._id, 1);
    } else {
      post.likes.push(req.user._id);
    }
  }

  await post.save();

  res.json(post);
});

// comment on post
const commentOnPost = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const post = await Post.findById(req.params.id);

  if (post) {
    post.comments.push({ user: req.user._id, text });
  } else {
    res.status(404);
    throw new Error("Post not found!");
  }

  await post.save();
  res.json({ msg: "comment added" });
});

// Delete comment
const deleteComment = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.postId);

  if (post) {
    const comment = post.comments.find(
      (comm) => comm._id.toString() === req.params.commentId
    );

    // console.log(comment);

    if (comment) {
      if (comment.user.toString() === req.user._id.toString()) {
        post.comments.splice(comment._id, 1);
        await post.save();
        res.json({ msg: "comment deleted" });
      } else {
        res.status(400);
        throw new Error("You can't delete this comment");
      }
    } else {
      res.status(404);
      throw new Error("No comment found");
    }
  }

  // res.json("hello");
});

export {
  createPost,
  getSinglePost,
  deletePost,
  updatePost,
  getMyPosts,
  likePost,
  commentOnPost,
  deleteComment,
};
