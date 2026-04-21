import Hero from "../models/Hero.js";

// @desc    Get Hero settings
// @route   GET /api/hero
// @access  Public
export const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update Hero settings
// @route   POST /api/hero
// @access  Private/Admin
export const updateHero = async (req, res) => {
  const { heroImage, carouselImages } = req.body;

  try {
    let hero = await Hero.findOne();

    if (hero) {
      hero.heroImage = heroImage || hero.heroImage;
      hero.carouselImages = carouselImages || hero.carouselImages;
      const updatedHero = await hero.save();
      res.json(updatedHero);
    } else {
      const newHero = await Hero.create({
        heroImage,
        carouselImages,
      });
      res.status(201).json(newHero);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
