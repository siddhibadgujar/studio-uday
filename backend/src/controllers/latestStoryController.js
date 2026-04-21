import LatestStory from "../models/LatestStory.js";

/* Create new story */
export const createStory = async (req, res) => {
  try {
    const { title, images } = req.body;

    const story = await LatestStory.create({
      title,
      images
    });

    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get latest stories (limit 9) */
export const getLatestStories = async (req, res) => {
  try {
    const stories = await LatestStory.find()
      .sort({ createdAt: -1 })
      .limit(9);

    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Delete story (future admin use) */
export const deleteStory = async (req, res) => {
  try {
    await LatestStory.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Story deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};