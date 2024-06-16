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

export { sendFeedBack };
