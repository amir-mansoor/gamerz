import asyncHandler from "../middlewares/asyncHandler.js";
import FeedBack from "../models/feedbackModel.js";

const sendFeedBack = asyncHandler(async (req, res) => {
  const { feedback } = req.body;

  const user = await FeedBack.findOne({ user: req.user._id });
  if (user) {
    res.status(400);
    throw new Error("You already send a feedback");
  }

  await FeedBack.create({ user: req.user._id, feedbackMessage: feedback });
  res.json({ msg: "Feedback send successfully." });
});

const changeFeedBackStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const feedback = await FeedBack.findById(req.params.id);
  if (feedback) {
    feedback.status = status;
    await feedback.save();
    res.json({ msg: "feedback status changed" });
  } else {
    res.status(404);
    throw new Error("No feedback found!");
  }
});

const getFeedBacks = asyncHandler(async (req, res) => {
  const { status } = req.query;
  const feedbacks = await FeedBack.find({ status });

  res.json(feedbacks);
});

const deleteFeedBack = asyncHandler(async (req, res) => {
  const deletedFeedBack = await FeedBack.findOneAndDelete({
    _id: req.params.id,
  });
  if (deletedFeedBack) {
    res.json({ msg: "Feedback deleted successfully." });
  } else {
    res.json({ msg: "Feedback not found" });
  }
});

export { sendFeedBack, changeFeedBackStatus, getFeedBacks, deleteFeedBack };
