import PortfolioCategory from "../models/PortfolioCategory.js";

/* Create category */
export const createCategory = async (req, res) => {
  try {
    const { name, coverImage, microText } = req.body;

    const exists = await PortfolioCategory.findOne({ name });
    if (exists) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = await PortfolioCategory.create({
      name,
      coverImage,
      microText
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get all categories */
export const getAllCategories = async (req, res) => {
  try {
    const categories = await PortfolioCategory.find().sort({ createdAt: 1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};