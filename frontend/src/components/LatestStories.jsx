import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../api/config";

function LatestStories() {
  const [stories, setStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/stories`);
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  if (loading) return null;
  if (stories.length === 0) return null;

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-1">Latest Stories</h2>
        <p className="text-gray-400 text-sm mb-6">
          Check out what’s happening lately…
        </p>

        {/* HORIZONTAL SCROLLER */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {stories.map((story, i) =>
            story.images && story.images.length > 0 ? (
              <div
                key={story._id || i}
                onClick={() => {
                  setActiveStory(story);
                  setActiveIndex(0);
                }}
                className="min-w-[260px] md:min-w-[320px] cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src={story.images[0]}
                    alt={story.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
                </div>

                <h3 className="mt-3 font-medium">{story.title}</h3>
                <p className="text-sm text-gray-400">tap to see more →</p>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* FULLSCREEN VIEWER */}
      {activeStory && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center">
          {/* CLOSE */}
          <button
            className="absolute top-5 right-5 text-2xl text-white hover:text-gray-400 transition"
            onClick={() => setActiveStory(null)}
          >
            ✕
          </button>

          {/* PREV */}
          {activeStory.images.length > 1 && (
            <button
              className="absolute left-4 md:left-10 text-4xl text-white hover:text-orange-500 transition"
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + activeStory.images.length) %
                    activeStory.images.length
                )
              }
            >
              ‹
            </button>
          )}

          {/* IMAGE */}
          <img
            src={activeStory.images[activeIndex]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />

          {/* NEXT */}
          {activeStory.images.length > 1 && (
            <button
              className="absolute right-4 md:right-10 text-4xl text-white hover:text-orange-500 transition"
              onClick={() =>
                setActiveIndex(
                  (activeIndex + 1) % activeStory.images.length
                )
              }
            >
              ›
            </button>
          )}

          {/* COUNTER */}
          <div className="absolute bottom-10 text-gray-400 text-sm">
            {activeIndex + 1} / {activeStory.images.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default LatestStories;