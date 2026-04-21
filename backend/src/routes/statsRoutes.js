import express from "express";
import Stats from "../models/Stats.js";

const router = express.Router();

// @desc    Increment and get visitor count
// @route   GET /api/stats/visit
// @access  Public
router.get("/visit", async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    let stats = await Stats.findOne();

    if (!stats) {
      stats = await Stats.create({ totalVisits: 1, uniqueIPs: [ip] });
    } else {
      stats.totalVisits += 1;
      if (!stats.uniqueIPs.includes(ip)) {
        stats.uniqueIPs.push(ip);
      }
      await stats.save();
    }

    res.json({ totalVisits: stats.totalVisits, uniqueVisitors: stats.uniqueIPs.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
