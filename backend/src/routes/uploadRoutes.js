import express from "express";
import upload from "../config/cloudinary.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private/Admin
router.post("/", protect, upload.single("image"), (req, res) => {
  if (req.file) {
    res.json({
      url: req.file.path,
      public_id: req.file.filename,
    });
  } else {
    res.status(400).json({ message: "Image upload failed" });
  }
});

// @desc    Upload multiple images
// @route   POST /api/upload/multiple
// @access  Private/Admin
router.post("/multiple", protect, upload.array("images", 10), (req, res) => {
  if (req.files) {
    const urls = req.files.map((file) => file.path);
    res.json(urls);
  } else {
    res.status(400).json({ message: "Images upload failed" });
  }
});

export default router;
