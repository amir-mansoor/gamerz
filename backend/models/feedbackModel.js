import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    feedbackMessage: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  {
    timestamps: true,
  }
);

const FeedBack = mongoose.model("Feedback", feedbackSchema);
export default FeedBack;
