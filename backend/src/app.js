import express from "express";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";
import latestStoryRoutes from "./routes/latestStoryRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import sectionRoutes from "./routes/sectionRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";

const app = express();

/* middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/admin", adminRoutes);
app.use("/api/stories", latestStoryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/stats", statsRoutes);

/* test route */
app.get("/", (req, res) => {
  res.send("Studio Uday API is running 🚀");
});

export default app;