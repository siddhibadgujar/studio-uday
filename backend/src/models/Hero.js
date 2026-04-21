import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    heroImage: {
      type: String,
      required: true,
    },
    carouselImages: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Hero = mongoose.model("Hero", heroSchema);
export default Hero;
