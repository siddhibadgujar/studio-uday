import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../api/config";

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", role: "", comment: "" });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch approved reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/reviews`);
        if (data && data.length > 0) {
          setReviews(data);
        } else {
          // Fallback if no reviews approved yet
          setReviews([
            { _id: "1", name: "Rajesh Patil", role: "Groom", comment: "Uday sir captured every moment of our wedding beautifully!" },
            { _id: "2", name: "Sangeeta Ghare", role: "Bride", comment: "Amazing photography! Memories forever." },
          ]);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Auto-slide
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;
    
    try {
      await axios.post(`${API_BASE_URL}/api/reviews`, formData);
      setFormData({ name: "", role: "", comment: "" });
      alert("Thank you! Your review has been submitted and is pending approval.");
    } catch (error) {
      alert("Error submitting review. Please try again.");
    }
  };

  const getCarouselItems = () => {
    if (reviews.length === 0) return [];
    if (reviews.length === 1) return [reviews[0], reviews[0], reviews[0]];
    if (reviews.length === 2) return [reviews[1], reviews[0], reviews[1]];
    
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    const nextIndex = (currentIndex + 1) % reviews.length;
    return [reviews[prevIndex], reviews[currentIndex], reviews[nextIndex]];
  };

  if (loading) return null;

  return (
    <section id="testimonials" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Client Voices</h2>
        <p className="text-center text-gray-400 mb-6">Moments Captured, Stories Shared</p>

        {/* Carousel */}
        {reviews.length > 0 && (
          <div className="relative flex justify-center items-center h-80 mb-12">
            {getCarouselItems().map((review, idx) => {
              const isCurrent = idx === 1;
              return (
                <div
                  key={`${review._id}-${idx}`}
                  className={`absolute transition-all duration-700 ease-in-out transform rounded-xl shadow-2xl p-6 w-80 text-center
                    ${isCurrent ? "z-20 scale-105 opacity-100" : "z-10 scale-90 opacity-50"}`}
                  style={{
                    left: `${50 + (idx - 1) * 35}%`,
                    top: "50%",
                    transform: `translate(-50%, -50%)`,
                  }}
                >
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                    <p className="mb-4 italic">"{review.comment}"</p>
                    <h4 className="font-semibold text-orange-400">{review.name}</h4>
                    {review.role && <p className="text-gray-400 text-sm">{review.role}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Review Form */}
        <div className="max-w-xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-2xl flex flex-col gap-4 shadow-xl border border-gray-700">
            <h3 className="text-xl font-bold text-center mb-2">Share Your Experience</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                placeholder="Role (e.g. Groom)"
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value })}
                className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <textarea
              placeholder="Your Review"
              value={formData.comment}
              onChange={e => setFormData({ ...formData, comment: e.target.value })}
              className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
              rows={3}
              required
            />
            <button type="submit" className="bg-orange-600 hover:bg-orange-700 transition px-6 py-3 rounded-lg text-white font-bold uppercase tracking-wider">
              Submit Review
            </button>
          </form>
        </div>

        {/* View All */}
        <div className="text-center">
          <button
            onClick={() => setShowModal(true)}
            className="text-orange-500 hover:underline font-semibold"
          >
            View All Reviews
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[70] p-4">
            <div className="bg-gray-900 p-8 rounded-2xl max-h-[80vh] overflow-y-auto w-full max-w-3xl relative border border-gray-800">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white text-xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-6 text-center text-orange-500">All Reviews</h3>
              <div className="flex flex-col gap-4">
                {reviews.map(r => (
                  <div key={r._id} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <p className="mb-4 italic">"{r.comment}"</p>
                    <h4 className="font-semibold">{r.name}</h4>
                    {r.role && <p className="text-gray-400 text-sm">{r.role}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;