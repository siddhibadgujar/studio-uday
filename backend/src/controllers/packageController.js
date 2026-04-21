import Package from "../models/Package.js";

// @desc    Get all packages
// @route   GET /api/packages
// @access  Public
export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a package
// @route   POST /api/packages
// @access  Private/Admin
export const createPackage = async (req, res) => {
  const { title, price, benefits } = req.body;

  try {
    const newPackage = await Package.create({
      title,
      price,
      benefits,
    });
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a package
// @route   PUT /api/packages/:id
// @access  Private/Admin
export const updatePackage = async (req, res) => {
  const { title, price, benefits } = req.body;

  try {
    const pkg = await Package.findById(req.params.id);

    if (pkg) {
      pkg.title = title || pkg.title;
      pkg.price = price || pkg.price;
      pkg.benefits = benefits || pkg.benefits;
      const updatedPackage = await pkg.save();
      res.json(updatedPackage);
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a package
// @route   DELETE /api/packages/:id
// @access  Private/Admin
export const deletePackage = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);

    if (pkg) {
      await pkg.deleteOne();
      res.json({ message: "Package removed" });
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
