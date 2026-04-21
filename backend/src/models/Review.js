import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    role: {
      type: String, // e.g., "Groom," "Bride," "Parent"
      default: "Client",
    },
    isApproved: {
      type: Boolean,
      default: false, // Reviews only show up after admin approves them
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
export default Review;
