import mongoose from "mongoose";

const latestStorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    images: [
      {
        type: String,
        required: true
      }
    ]
  },
  { timestamps: true }
);

const LatestStory = mongoose.model("LatestStory", latestStorySchema);

export default LatestStory;