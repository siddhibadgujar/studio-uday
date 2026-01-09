import { useState } from "react";
import logo from "../assets/images/studioLogo.png";
import { FaInstagram, FaWhatsapp, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Packages", id: "packages" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  // Smooth scroll function
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // close mobile menu if open
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Studio Uday Logo" className="h-11 w-auto object-contain" />
          <div className="leading-tight overflow-hidden">
            <h1 className="text-lg font-semibold tracking-wide text-white">Uday Photography</h1>
            <p className="text-xs text-gray-400 tracking-widest relative inline-block mt-0.5 animate-fadeUp">
              Capturing Timeless Moments
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-orange-500 animate-lineReveal"></span>
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm tracking-wide">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleScroll(item.id)}
                className="text-white hover:text-orange-400 transition relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-orange-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* SOCIALS */}
        <div className="hidden md:flex gap-5 text-lg text-white">
          <a
            href="https://www.instagram.com/uday.photographyy/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/919923403242"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.youtube.com/@udayphotography2628"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition transform hover:scale-110"
          >
            <FaYoutube />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 pb-6">
          <ul className="flex flex-col gap-5 mt-6 text-sm tracking-wide">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="block text-white hover:text-orange-400 transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 mt-6 text-xl text-white">
            <a
              href="https://www.instagram.com/uday.photographyy/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919923403242"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/@udayphotography2628"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1.2s ease forwards;
        }

        @keyframes lineReveal {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-lineReveal {
          animation: lineReveal 1.4s ease forwards;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;