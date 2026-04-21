import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    benefits: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);
export default Package;
