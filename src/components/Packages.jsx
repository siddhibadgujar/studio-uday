function Packages() {
  const packages = [
    {
      name: "Wedding Gold",
      price: "₹50,000",
      description: "Full wedding coverage with unlimited photos, pre-wedding shoot, and highlights video."
    },
    {
      name: "Couple Shoot",
      price: "₹15,000",
      description: "Romantic outdoor shoot for couples with 50+ edited images."
    },
    {
      name: "Bridal Glam",
      price: "₹25,000",
      description: "Exclusive bridal portraits capturing your best moments and expressions."
    },
    {
      name: "Events & Parties",
      price: "₹20,000",
      description: "Capture birthdays, corporate events, and private parties professionally."
    }
  ];

  const phoneNumber = "919923403242"; // Uday's WhatsApp number

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
              `Hi Uday! I want more information about the ${pkg.name} package.`
            )}`;

            return (
              <div
                key={index}
                className="bg-black bg-opacity-70 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">{pkg.name}</h3>
                  <p className="text-gray-300 mb-4">{pkg.description}</p>
                </div>

                {/* Price and Enquire Button Inline */}
                <div className="flex justify-between items-center">
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