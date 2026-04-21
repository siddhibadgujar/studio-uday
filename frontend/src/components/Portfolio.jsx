import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../api/config";

// Fallback images if database is empty
import bridalCover from "../assets/images/portfolio/bridal.jpg";
import coupleCover from "../assets/images/portfolio/couple.jpg";
import weddingCover from "../assets/images/portfolio/wedding.jpg";

function Portfolio() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/sections`);
        if (data && data.length > 0) {
          setSections(data);
        } else {
          // Hardcoded fallback for demonstration if DB is empty
          setSections([
            { name: "Bridal", coverImage: bridalCover, microtext: "wanna see more →" },
            { name: "Couple", coverImage: coupleCover, microtext: "more moments inside →" },
            { name: "Wedding", coverImage: weddingCover, microtext: "tap to see more →" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  if (loading) return <div className="text-center py-20 bg-gray-900 text-white">Loading Gallery...</div>;

  return (
    <section id="portfolio" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Portfolio
        </h2>
        <p className="text-gray-400 text-center mb-12 text-sm md:text-base">
          Check out what’s happening lately…
        </p>

        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {sections.map((cat, idx) => (
            <div 
              key={cat._id || idx} 
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src={cat.coverImage} 
                alt={cat.name} 
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
                <p className="text-sm text-gray-300">{cat.microtext || "view gallery →"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;