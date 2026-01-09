import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import wedding1 from "../assets/images/portfolio/wedding1.jpg";
import wedding2 from "../assets/images/portfolio/wedding2.jpg";
import portrait1 from "../assets/images/portfolio/portrait1.jpg";
import portrait2 from "../assets/images/portfolio/portrait2.jpg";
import portrait3 from "../assets/images/portfolio/portrait3.jpg";
import portrait4 from "../assets/images/portfolio/portrait4.jpg";
import product1 from "../assets/images/portfolio/product1.jpg";
import product2 from "../assets/images/portfolio/product2.jpg";
import product3 from "../assets/images/portfolio/product3.jpg";
import bride1 from "../assets/images/portfolio/bride1.jpg";
import bride2 from "../assets/images/portfolio/bride2.jpg";
import bride3 from "../assets/images/portfolio/bride3.jpg";
import bride4 from "../assets/images/portfolio/bride4.jpg";
import couple1 from "../assets/images/portfolio/couple1.jpg";
import couple2 from "../assets/images/portfolio/couple2.jpg";
import couple3 from "../assets/images/portfolio/couple3.jpg";

function Portfolio() {
  const categories = ["All", "Weddings", "Portraits", "Product", "Couples"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const portfolioItems = [
    { id: 1, category: "Weddings", src: wedding1 },
    { id: 2, category: "Weddings", src: wedding2 },
    { id: 3, category: "Portraits", src: portrait1 },
    { id: 4, category: "Portraits", src: portrait2 },
    { id: 5, category: "Portraits", src: portrait3 },
    { id: 6, category: "Portraits", src: portrait4 },
    { id: 7, category: "Product", src: product1 },
    { id: 8, category: "Product", src: product2 },
    { id: 9, category: "Product", src: product3 },
    { id: 10, category: "Weddings", src: bride1 },
    { id: 11, category: "Weddings", src: bride2 },
    { id: 12, category: "Weddings", src: bride3 },
    { id: 13, category: "Weddings", src: bride4 },
    { id: 14, category: "Couples", src: couple1 },
    { id: 15, category: "Couples", src: couple2 },
    { id: 16, category: "Couples", src: couple3 },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Portfolio</h2>
        <p className="text-gray-400 text-center mb-10">
          Moments captured with emotion & detail
        </p>

        {/* Category Buttons (Pill Style) */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-orange-500 text-black"
                  : "border border-gray-600 hover:bg-orange-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid with Motion */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setActiveImage(item.src)}
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt=""
            className="max-h-[90vh] max-w-full rounded-xl"
          />
        </div>
      )}
    </section>
  );
}

export default Portfolio;