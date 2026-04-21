import mongoose from "mongoose";

const portfolioCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    coverImage: {
      type: String,
      required: true
    },
    microText: {
      type: String,
      required: false   // 👈 optional, flexible
    }
  },
  { timestamps: true }
);

const PortfolioCategory = mongoose.model(
  "PortfolioCategory",
  portfolioCategorySchema
);

export default PortfolioCategory;