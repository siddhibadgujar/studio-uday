import mongoose from "mongoose";

const statsSchema = new mongoose.Schema(
  {
    totalVisits: {
      type: Number,
      default: 0,
    },
    uniqueIPs: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Stats = mongoose.model("Stats", statsSchema);
export default Stats;
