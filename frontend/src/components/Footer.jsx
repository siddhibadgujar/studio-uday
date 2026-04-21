import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../api/config";

function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/stats/visit`);
        setVisits(data.totalVisits);
      } catch (error) {
        console.error("Error tracking visit:", error);
      }
    };
    trackVisit();
  }, []);

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400 text-sm">
        
        <p className="mb-4">
          © 2026 Studio Uday. All Rights Reserved.
        </p>

        <div className="bg-gray-900 inline-block px-4 py-2 rounded-full border border-gray-800 mb-4">
          <span className="text-orange-500 font-bold">{visits.toLocaleString()}</span> Total Visits
        </div>

        <p className="mt-2 text-gray-500">
          Designed & Developed by{" "}
          <span className="text-white font-medium">
            Siddhi Badgujar
          </span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;