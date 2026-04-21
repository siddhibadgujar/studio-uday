import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./src/models/Admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const admin = await Admin.findOne({ email: "admin@studiouday.com" });
    if (admin) {
      console.log("Admin exists:", admin.username);
    } else {
      console.log("Admin does not exist");
    }
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
