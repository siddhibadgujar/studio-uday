import Contact from "../models/Contact.js";

// Create a new contact request
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, eventType, message } = req.body;

    // Simple validation (optional but recommended)
    if (!name || !email || !eventType || !message) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      eventType,
      message,
    });

    res.status(201).json({
      message: "Contact request submitted successfully",
      contact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Optional: Get all contacts (admin only)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};