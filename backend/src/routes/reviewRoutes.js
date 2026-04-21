import express from "express";
import {
  getApprovedReviews,
  createReview,
  getAllReviews,
  toggleReviewApproval,
  deleteReview,
} from "../controllers/reviewController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getApprovedReviews).post(createReview);
router.route("/admin").get(protect, getAllReviews);
router.route("/:id/approve").put(protect, toggleReviewApproval);
router.route("/:id").delete(protect, deleteReview);

export default router;
