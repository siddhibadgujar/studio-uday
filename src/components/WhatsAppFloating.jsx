import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const phoneNumber = "919923403242";

const options = [
  {
    label: "Wedding Photography Enquiry",
    message: "Hello Studio Uday, I would like to know more about your wedding photography packages."
  },
  {
    label: "Pre-Wedding Shoot",
    message: "Hello Studio Uday, I am interested in a pre-wedding photoshoot. Please share details."
  },
  {
    label: "Portrait / Family Shoot",
    message: "Hello Studio Uday, I want to enquire about portrait or family photoshoot sessions."
  },
  {
    label: "Product / Commercial Shoot",
    message: "Hello Studio Uday, I need details for a product or commercial photoshoot."
  },
];

function WhatsAppFloating() {
  const [open, setOpen] = useState(false);

  const sendMessage = (text) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <>
      {/* OPTIONS PANEL */}
      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-72 bg-[#0d0d0d] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <p className="font-semibold text-white">Quick WhatsApp Enquiry</p>
            <button onClick={() => setOpen(false)}>
              <FaTimes className="text-gray-400 hover:text-white" />
            </button>
          </div>

          <div className="flex flex-col">
            {options.map((opt, index) => (
              <button
                key={index}
                onClick={() => sendMessage(opt.message)}
                className="px-4 py-3 text-left text-gray-300 hover:bg-green-600 hover:text-white transition text-sm"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-2xl transition"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="hidden sm:block font-semibold">WhatsApp</span>
      </button>
    </>
  );
}

export default WhatsAppFloating;