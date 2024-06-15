import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    feedbackMessage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const feedBack = mongoose.model("Feedback", feedbackSchema);
export default feedBack;
