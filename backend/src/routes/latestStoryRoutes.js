import express from "express";
import LatestStory from "../models/LatestStory.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* Get latest stories (limit 9) */
router.get("/", async (req, res) => {
  try {
    const stories = await LatestStory.find()
      .sort({ createdAt: -1 })
      .limit(9);
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Create new story */
router.post("/", protect, async (req, res) => {
  try {
    const { title, images } = req.body;
    const story = await LatestStory.create({
      title,
      images,
    });
    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Delete story */
router.delete("/:id", protect, async (req, res) => {
  try {
    await LatestStory.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Story deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;