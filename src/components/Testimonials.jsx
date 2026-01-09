import { useState, useEffect } from "react";

function Testimonials() {
  const initialReviews = [
    { id: 1, name: "Rajesh Patil", location: "Jalgaon", text: "Uday sir captured every moment of our wedding beautifully!" },
    { id: 2, name: "Sangeeta Ghare", location: "Dhule", text: "Amazing photography! Memories forever." },
    { id: 3, name: "Vivek Deshmukh", location: "Nashik", text: "Uday sir's work is exceptional." },
    { id: 4, name: "Mohini Khandeshkar", location: "Nandurbar", text: "We loved how every emotion was captured beautifully." },
    { id: 5, name: "Anil Jadhav", location: "Jalgaon", text: "Every photo tells a story — absolutely stunning!" },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", location: "", text: "" });
  const [showModal, setShowModal] = useState(false);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    const newReview = { id: reviews.length + 1, ...formData };
    setReviews([...reviews, newReview]);
    setFormData({ name: "", location: "", text: "" });
    alert("Thank you! Your review has been added.");
  };

  // Get carousel display: previous, current, next
  const getCarouselItems = () => {
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    const nextIndex = (currentIndex + 1) % reviews.length;
    return [reviews[prevIndex], reviews[currentIndex], reviews[nextIndex]];
  };

  return (
    <section id="testimonials" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Client Voices</h2>
        <p className="text-center text-gray-400 mb-6">Moments Captured, Stories Shared</p>

        {/* Carousel */}
        <div className="relative flex justify-center items-center h-80 mb-12">
          {getCarouselItems().map((review, idx) => {
            // idx 0 = previous, 1 = current, 2 = next
            const isCurrent = idx === 1;
            return (
              <div
                key={review.id}
                className={`absolute transition-all duration-700 ease-in-out transform rounded-xl shadow-2xl p-6 w-80 text-center
                  ${isCurrent ? "z-20 scale-105 opacity-100" : "z-10 scale-90 opacity-50"}`}
                style={{
                  left: `${50 + (idx - 1) * 35}%`, // prev: 15%, current: 50%, next: 85%
                  top: "50%",
                  transform: `${isCurrent ? "translate(-50%, -50%)" : "translate(-50%, -50%)"}`,
                }}
              >
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                  <p className="mb-4 italic">"{review.text}"</p>
                  <h4 className="font-semibold">{review.name}</h4>
                  {review.location && <p className="text-gray-400 text-sm">{review.location}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Review Form */}
        <div className="max-w-xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="p-3 rounded bg-gray-700 text-white"
              required
            />
            <input
              type="text"
              placeholder="Location (optional)"
              value={formData.location}
              onChange={e => setFormData({ ...formData, location: e.target.value })}
              className="p-3 rounded bg-gray-700 text-white"
            />
            <textarea
              placeholder="Your Review"
              value={formData.text}
              onChange={e => setFormData({ ...formData, text: e.target.value })}
              className="p-3 rounded bg-gray-700 text-white"
              rows={4}
              required
            />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded text-white font-semibold">
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
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-gray-900 p-6 rounded-xl max-h-full overflow-y-auto w-full max-w-3xl relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white text-xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-6 text-center">All Reviews</h3>
              <div className="flex flex-col gap-4">
                {reviews.map(r => (
                  <div key={r.id} className="bg-gray-800 p-4 rounded-lg">
                    <p className="mb-2">"{r.text}"</p>
                    <h4 className="font-semibold">{r.name}</h4>
                    {r.location && <p className="text-gray-400 text-sm">{r.location}</p>}
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