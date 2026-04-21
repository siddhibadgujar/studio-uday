import Section from "../models/Section.js";

// @desc    Get all sections
// @route   GET /api/sections
// @access  Public
export const getSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.json(sections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a section
// @route   POST /api/sections
// @access  Private/Admin
export const createSection = async (req, res) => {
  const { name, coverImage, images } = req.body;

  try {
    const section = await Section.create({
      name,
      coverImage,
      images,
    });
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a section
// @route   PUT /api/sections/:id
// @access  Private/Admin
export const updateSection = async (req, res) => {
  const { name, coverImage, images } = req.body;

  try {
    const section = await Section.findById(req.params.id);

    if (section) {
      section.name = name || section.name;
      section.coverImage = coverImage || section.coverImage;
      section.images = images || section.images;
      const updatedSection = await section.save();
      res.json(updatedSection);
    } else {
      res.status(404).json({ message: "Section not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a section
// @route   DELETE /api/sections/:id
// @access  Private/Admin
export const deleteSection = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);

    if (section) {
      await section.deleteOne();
      res.json({ message: "Section removed" });
    } else {
      res.status(404).json({ message: "Section not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
