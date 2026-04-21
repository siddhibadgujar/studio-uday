import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    eventType: {
      type: String,
      required: true,
      enum: [
        "Wedding",
        "Pre-Wedding",
        "Engagement",
        "Birthday",
        "Kids",
        "Baby Shower",
        "Fashion",
        "Travel",
        "Brand Shoot",
        "Other",
      ],
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;