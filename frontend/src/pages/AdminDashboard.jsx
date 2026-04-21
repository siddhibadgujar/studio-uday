import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ManageHero from "./admin/ManageHero";
import ManageSections from "./admin/ManageSections";
import ManageStories from "./admin/ManageStories";
import ManagePackages from "./admin/ManagePackages";
import ManageReviews from "./admin/ManageReviews";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-10 text-blue-500">Dashboard</h1>
        <nav className="flex-1 space-y-4">
          <Link to="/admin/dashboard/hero" className="block p-3 hover:bg-gray-700 rounded-lg transition">Hero & Carousel</Link>
          <Link to="/admin/dashboard/sections" className="block p-3 hover:bg-gray-700 rounded-lg transition">Portfolio Sections</Link>
          <Link to="/admin/dashboard/stories" className="block p-3 hover:bg-gray-700 rounded-lg transition">Latest Stories</Link>
          <Link to="/admin/dashboard/packages" className="block p-3 hover:bg-gray-700 rounded-lg transition">Pricing Packages</Link>
          <Link to="/admin/dashboard/reviews" className="block p-3 hover:bg-gray-700 rounded-lg transition font-semibold text-orange-500">Client Reviews</Link>
        </nav>
        <button 
          onClick={handleLogout}
          className="mt-10 w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg font-semibold transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <Routes>
          <Route path="hero" element={<ManageHero />} />
          <Route path="sections" element={<ManageSections />} />
          <Route path="stories" element={<ManageStories />} />
          <Route path="packages" element={<ManagePackages />} />
          <Route path="reviews" element={<ManageReviews />} />
          <Route path="/" element={<div className="text-center mt-20 text-gray-500">Select a section to manage content</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
