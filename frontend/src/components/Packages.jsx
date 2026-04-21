import React, { useState, useEffect } from "react";
import axios from "axios";

function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/packages");
        if (data && data.length > 0) {
          setPackages(data);
        } else {
          // Fallback
          setPackages([
            { title: "Wedding Gold", price: "₹50,000", benefits: ["Full wedding coverage", "Pre-wedding shoot", "Highlights video"] },
            { title: "Couple Shoot", price: "₹15,000", benefits: ["Romantic outdoor shoot", "50+ edited images"] },
          ]);
        }
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const phoneNumber = "919923403242"; 

  if (loading) return null;

  return (
    <section id="packages" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Packages</h2>
        <p className="text-gray-400 text-center mb-12">
          Choose the perfect package for your special moments
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => {
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              `Hi Uday! I want more information about the ${pkg.title} package.`
            )}`;

            return (
              <div
                key={pkg._id || index}
                className="bg-black bg-opacity-70 p-6 rounded-2xl border border-gray-800 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">{pkg.title}</h3>
                  <ul className="text-gray-300 mb-6 text-sm space-y-2">
                    {pkg.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <p className="text-lg font-bold text-white">{pkg.price}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl uppercase text-sm shadow-lg transition-all duration-300"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Packages;