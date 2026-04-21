import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../../api/config";

const ManageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const { data } = await axios.get("http://localhost:5000/api/reviews/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleToggleApprove = async (id) => {
    const token = localStorage.getItem("adminToken");
    try {
      await axios.put(`http://localhost:5000/api/reviews/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchReviews();
    } catch (error) {
      alert("Error updating review");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    const token = localStorage.getItem("adminToken");
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchReviews();
    } catch (error) {
      alert("Error deleting review");
    }
  };

  if (loading) return <div className="text-white">Loading reviews...</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-8 text-orange-500">Manage Client Reviews</h2>
      
      <div className="grid gap-6">
        {reviews.length === 0 && <p className="text-gray-500">No reviews found.</p>}
        {reviews.map((review) => (
          <div key={review._id} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <span className={`px-2 py-1 text-xs rounded ${review.isApproved ? "bg-green-600 text-white" : "bg-yellow-600 text-black"}`}>
                  {review.isApproved ? "Approved" : "Pending"}
                </span>
              </div>
              <p className="text-gray-400 italic mb-2">"{review.comment}"</p>
              <p className="text-sm text-gray-500">{review.role} • {new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => handleToggleApprove(review._id)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${review.isApproved ? "bg-yellow-600 hover:bg-yellow-700 text-black" : "bg-green-600 hover:bg-green-700 text-white"}`}
              >
                {review.isApproved ? "Unapprove" : "Approve"}
              </button>
              <button 
                onClick={() => handleDelete(review._id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageReviews;
