import express from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

// POST /contact – submit contact form
router.post("/", createContact);

// GET /contact – get all contacts (optional admin use)
router.get("/", getAllContacts);

export default router;