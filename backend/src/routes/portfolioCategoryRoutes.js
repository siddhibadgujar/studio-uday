import express from "express";
import {
  createCategory,
  getAllCategories
} from "../controllers/portfolioCategoryController.js";

const router = express.Router();

/* create category */
router.post("/", createCategory);

/* get all categories */
router.get("/", getAllCategories);

export default router;